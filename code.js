function augmentingPath(graph, start, end, path = [], prev = []) {
    path.push(start);
    if (start == end) {
        return path; 
    }
    prev.push(start);
    if (graph[start]) {
        for (var value in graph[start]) {
            if (!prev.includes(value)) {
                var newPath = augmentingPath(graph, value, end, path, prev);
                if (newPath.length > 0) {
                    return newPath;
                }
            }
        }
    }
    path.pop();
    prev.pop()
    return [];  
}
