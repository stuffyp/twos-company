from collections import deque

def get_moves(board, i, j):
    ans = []
    i_max = len(board)
    j_max = len(board[0])
    if not board[i][j] in ['r', 'g', 'b', 'n']:
        return
    move = (i, j)
    for k in range(i+1, i_max):
        if board[k][j]:
            break
        move = (k, j)
    ans.append(move)
    move = (i, j)
    for k in range(i-1, -1, -1):
        if board[k][j]:
            break
        move = (k, j)
    ans.append(move)
    move = (i, j)
    for k in range(j+1, j_max):
        if board[i][k]:
            break
        move = (i, k)
    ans.append(move)
    move = (i, j)
    for k in range(j-1, -1, -1):
        if board[i][k]:
            break
        move = (i, k)
    ans.append(move)
    return ans


def update_board(old_board, start, end):
    i1, j1 = start
    i2, j2 = end
    board = [r.copy() for r in old_board]
    temp = board[i1][j1]
    board[i1][j1] = None
    board[i2][j2] = temp
    return board


def get_updates(board):
    temp = []
    for i, r in enumerate(board):
        for j, x in enumerate(r):
            if not x in ['r', 'g', 'b']:
                continue
            moves = get_moves(board, i, j)
            for m in moves:
                if m!=(i, j):
                    temp.append(((i, j), m))
    ans = []
    for t in temp:
        b = update_board(board, t[0], t[1])
        ans.append(b)
    return ans


def check_win(board):
    for i, r in enumerate(board):
        for j, v in enumerate(r):
            if not neighbors(board, i, j):
                return False
    return True


def neighbors(board, i, j):
    i_max = len(board)-1
    j_max = len(board[0])-1
    value = board[i][j]
    if not value in ['r', 'g', 'b']:
        return True
    if i > 0 and value == board[i - 1][j]:
        return True
    elif j > 0 and value == board[i][j - 1]: 
        return True
    elif i < i_max and value == board[i + 1][j]:
        return True
    elif j < j_max and value == board[i][j + 1]:
        return True
    return False


def get_hash(board):
    return tuple([tuple(r) for r in board])


def bfs(board):
    prev = {}
    q = deque()
    q.append((board, None))
    end = 0
    while q:
        curr, p = q.popleft()
        hc = get_hash(curr)
        if check_win(curr):
            end = hc
            prev[hc] = p
            break
        prev[hc] = p
        for b in get_updates(curr):
            if get_hash(b) in prev:
                continue
            q.append((b, hc))
    while end:
        print(end)
        end = prev[end]


h = bfs([
            ['w', 'w', 'b', None],
            ['w', 'g', None, 'r'],
            ['r', None, 'g', 'w'],
            [None, 'b', 'w', 'w'],
        ])
print(h)

#print(get_updates([
 #      ['b', None, None, 'g', 'g'],
  #      ['b', 'w', None, 'w', None],
   #     [None, None, None, None, None],
    #]))
