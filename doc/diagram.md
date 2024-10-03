# insertsort
### PSEUDO CODE
```
fonction insertsort() 
    n = "longueur de 'csvData'"

    pour i de 1 à n - 1 faire 
        j = i

        tant que j > 0 et "isLess(j, j - 1)" faire 
            "swap(j, j - 1)"
            j = j - 1
```

### LOGIGRAM
```mermaid
graph TD
    A["Début"] --> B["n = longueur de csvData"]
    B --> C["i = 1"]
    C --> D{"i < n ?"}
    D -- Oui --> E["j = i"]
    D -- Non --> F["Fin"]
    E --> G{"j > 0 ?"}
    G -- Oui --> H{"isLess(j, j - 1) ?"}
    H -- Oui --> I["swap(j, j - 1)"]
    I --> J["j = j - 1"]
    J --> G
    H -- Non --> K["j = j - 1"]
    K --> G
    G -- Non --> C
```

# selectionsort
### PSEUDO CODE
```
fonction selectionsort() 
    n = "longueur de 'csvData'"

    pour i de 0 à n - 1 faire 
        minIndex = i

        pour j de i + 1 à n faire 
            si "isLess(j, minIndex)" alors 
                minIndex = j
            fin si
        fin pour

        si minIndex ≠ i alors 
            "swap(i, minIndex)"
        fin si
    fin pour
```

### LOGIGRAM
```mermaid
graph TD
    A["Début"] --> B["n = longueur de 'csvData'"]
    B --> C["pour i de 0 à n - 1 faire"]
    C --> D["minIndex = i"]
    D --> E["pour j de i + 1 à n faire"]
    E --> F{"isLess(j, minIndex) ?"}
    F -- Oui --> G["minIndex = j"]
    F -- Non --> E
    E --> H["fin pour"]
    H --> I{"minIndex ≠ i ?"}
    I -- Oui --> J["swap(i, minIndex)"]
    J --> H
    I -- Non --> H
    H --> C
    C --> K["Fin"]
```

# bubblesort
### PSEUDO CODE
```
fonction bubblesort() 
    n = "longueur de 'csvData'"

    pour i de 0 à n - 1 faire 
        pour j de 0 à n - 1 - i faire 
            si "isLess(j + 1, j)" alors 
                "swap(j, j + 1)"
            fin si
        fin pour
    fin pour
```

### LOGIGRAM
```mermaid
graph TD
    A["Début"] --> B["n = longueur de 'csvData'"]
    B --> C["pour i de 0 à n - 1 faire"]
    C --> D["pour j de 0 à n - 1 - i faire"]
    D --> E{"isLess(j + 1, j) ?"}
    E -- Oui --> F["swap(j, j + 1)"]
    F --> D
    E -- Non --> D
    D --> C
    C --> G["Fin"]
```

# shellsort
### PSEUDO CODE
```
fonction shellsort() 
    n = "longueur de 'csvData'"
    gap = "Math.floor(n / 2)"

    tant que gap > 0 faire 
        pour i de gap à n faire 
            j = i

            tant que j ≥ gap et "isLess(j, j - gap)" faire 
                "swap(j, j - gap)"
                j = j - gap
            fin tant que
        fin pour
        gap = "Math.floor(gap / 2)"
    fin tant que
```

### LOGIGRAM
```mermaid
graph TD
    A["Début"] --> B["n = longueur de 'csvData'"]
    B --> C["gap = Math.floor(n / 2)"]
    C --> D{"gap > 0 ?"}
    D -- Oui --> E["pour i de gap à n faire"]
    E --> F["j = i"]
    F --> G{"j ≥ gap ?"}
    G -- Oui --> H{"isLess(j, j - gap) ?"}
    H -- Oui --> I["swap(j, j - gap)"]
    I --> F
    H -- Non --> G
    G -- Non --> E
    E --> C
    D -- Non --> J["Fin"]
```

# mergesort
### PSEUDO CODE
```
fonction mergesort(arr = 'csvData', start = 0, end = 'arr.length - 1') 
    si start < end alors 
        mid = "Math.floor((start + end) / 2)"

        mergesort(arr, start, mid)
        mergesort(arr, mid + 1, end)

        temp = [] 
        left = start 
        right = mid + 1 

        tant que left ≤ mid et right ≤ end faire 
            si "isLess(left, right)" alors 
                "temp.push(arr[left])"
                left = left + 1
            sinon 
                "temp.push(arr[right])"
                right = right + 1
            fin si
        fin tant que

        tant que left ≤ mid faire 
            "temp.push(arr[left])"
            left = left + 1
        fin tant que

        tant que right ≤ end faire 
            "temp.push(arr[right])"
            right = right + 1
        fin tant que

        pour i de 0 à temp.length faire 
            "swap(start + i, arr.indexOf(temp[i]))"
        fin pour
    fin si
```

### LOGIGRAM
```mermaid
graph TD
    A["Début"] --> B["arr = 'csvData'"]
    B --> C["start = 0"]
    C --> D["end = 'arr.length - 1'"]
    D --> E{"start < end ?"}
    E -- Oui --> F["mid = Math.floor((start + end) / 2)"]
    F --> G["mergesort(arr, start, mid)"]
    G --> H["mergesort(arr, mid + 1, end)"]
    H --> I["temp = []"]
    I --> J["left = start"]
    J --> K["right = mid + 1"]
    K --> L{"left ≤ mid et right ≤ end ?"}
    L -- Oui --> M{"isLess(left, right) ?"}
    M -- Oui --> N["temp.push(arr[left])"]
    N --> O["left = left + 1"]
    M -- Non --> P["temp.push(arr[right])"]
    P --> Q["right = right + 1"]
    O --> L
    Q --> L
    L -- Non --> R{"left ≤ mid ?"}
    R -- Oui --> S["temp.push(arr[left])"]
    S --> T["left = left + 1"]
    T --> R
    R -- Non --> U{"right ≤ end ?"}
    U -- Oui --> V["temp.push(arr[right])"]
    V --> W["right = right + 1"]
    W --> U
    U -- Non --> X["pour i de 0 à temp.length faire"]
    X --> Y["swap(start + i, arr.indexOf(temp[i]))"]
    Y --> X
    E -- Non --> Z["Fin"]
```

# heapsort
### PSEUDO CODE
```
fonction heapsort(arr = 'csvData') 
    n = "arr.length"

    pour i de "Math.floor(n / 2) - 1" à 0 faire 
        heapify(arr, n, i)

    pour i de n - 1 à 1 faire 
        "swap(0, i)"
        heapify(arr, i, 0)

    fonction heapify(arr, n, i) 
        largest = i
        left = "2 * i + 1"
        right = "2 * i + 2"

        si left < n et "isLess(largest, left)" alors 
            largest = left
        fin si

        si right < n et "isLess(largest, right)" alors 
            largest = right
        fin si

        si largest ≠ i alors 
            "swap(i, largest)"
            heapify(arr, n, largest)
        fin si
```

### LOGIGRAM
```mermaid
graph TD
    A["Début"] --> B["arr = 'csvData'"]
    B --> C["n = arr.length"]
    C --> D["pour i de Math.floor(n / 2) - 1 à 0 faire"]
    D --> E["heapify(arr, n, i)"]
    E --> D
    D --> F["pour i de n - 1 à 1 faire"]
    F --> G["swap(0, i)"]
    G --> H["heapify(arr, i, 0)"]
    H --> F
    F --> I["fonction heapify(arr, n, i)"]
    I --> J["largest = i"]
    J --> K["left = 2 * i + 1"]
    K --> L["right = 2 * i + 2"]
    L --> M{"left < n ?"}
    M -- Oui --> N{"isLess(largest, left) ?"}
    N -- Oui --> O["largest = left"]
    O --> M
    N -- Non --> M
    M -- Non --> P{"right < n ?"}
    P -- Oui --> Q{"isLess(largest, right) ?"}
    Q -- Oui --> R["largest = right"]
    R --> P
    Q -- Non --> P
    P -- Non --> S{"largest ≠ i ?"}
    S -- Oui --> T["swap(i, largest)"]
    T --> U["heapify(arr, n, largest)"]
    U --> S
    S -- Non --> V["Fin"]
```

# quicksort
### PSEUDO CODE
```
fonction quicksort(arr = 'csvData', low = 0, high = 'arr.length - 1') 
    si low < high alors 
        pivotIndex = partition(low, high)
        quicksort(arr, low, pivotIndex - 1)
        quicksort(arr, pivotIndex + 1, high)
    fin si

    fonction partition(low, high) 
        i = low

        pour j de low à high - 1 faire 
            si "isLess(j, high)" alors 
                "swap(i, j)"
                i = i + 1
            fin si
        fin pour
        
        "swap(i, high)"
        retourner i
```

### LOGIGRAM
```mermaid
graph TD
    A["Début"] --> B["arr = 'csvData'"]
    B --> C["low = 0"]
    C --> D["high = arr.length - 1"]
    D --> E{"low < high ?"}
    E -- Oui --> F["pivotIndex = partition(low, high)"]
    F --> G["quicksort(arr, low, pivotIndex - 1)"]
    G --> H["quicksort(arr, pivotIndex + 1, high)"]
    H --> E
    E -- Non --> I["Fin"]
    E --> J["fonction partition(low, high)"]
    J --> K["i = low"]
    K --> L["pour j de low à high - 1 faire"]
    L --> M{"isLess(j, high) ?"}
    M -- Oui --> N["swap(i, j)"]
    N --> O["i = i + 1"]
    O --> L
    M -- Non --> L
    L -- Non --> P["swap(i, high)"]
    P --> Q["retourner i"]
```

# quick3sort
### PSEUDO CODE
```
fonction quick3sort(arr = 'csvData', low = 0, high = 'arr.length - 1') 
    si low < high alors 
        {lt, gt} = partition(low, high)
        quick3sort(arr, low, lt - 1)
        quick3sort(arr, gt + 1, high)
    fin si

    fonction partition(low, high) 
        i = low
        lt = low
        gt = high

        tant que i ≤ gt faire 
            si "isLess(i, high)" alors 
                "swap(lt, i)"
                lt = lt + 1
                i = i + 1
            sinon si "isLess(high, i)" alors 
                "swap(i, gt)"
                gt = gt - 1
            sinon 
                i = i + 1
            fin si
        fin tant que
        retourner {lt, gt}
```

### LOGIGRAM
```mermaid
graph TD
    A["Début"] --> B["arr = 'csvData'"]
    B --> C["low = 0"]
    C --> D["high = arr.length - 1"]
    D --> E{"low < high ?"}
    E -- Oui --> F["{lt, gt} = partition(low, high)"]
    F --> G["quicksort(arr, low, lt - 1)"]
    G --> H["quicksort(arr, gt + 1, high)"]
    H --> E
    E -- Non --> I["Fin"]
    E --> J["fonction partition(low, high)"]
    J --> K["i = low"]
    K --> L["lt = low"]
    L --> M["gt = high"]
    M --> N{"i ≤ gt ?"}
    N -- Oui --> O{"isLess(i, high) ?"}
    O -- Oui --> P["swap(lt, i)"]
    P --> Q["lt = lt + 1"]
    Q --> R["i = i + 1"]
    R --> N
    O -- Non --> S{"isLess(high, i) ?"}
    S -- Oui --> T["swap(i, gt)"]
    T --> U["gt = gt - 1"]
    U --> N
    S -- Non --> V["i = i + 1"]
    V --> N
    N -- Non --> W["retourner {lt, gt}"]
```