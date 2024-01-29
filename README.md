# Build not from root

1. `npm i`
2. `nx build rapp1`
3. `nx reset`
4. `cd apps`
5. `nx build rapp1`
6. `nx reset`
7. `cd apps`
8. `nx build rapp2`
9. `nx reset`
10. `nx build rapp1`