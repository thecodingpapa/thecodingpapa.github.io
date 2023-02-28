# mark down works?
## this is the mark down!

this is now bad **bold text!!** but this is normal

this is *italic text*


1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item
- fourth item

this is simple code snippet inside text `var value = print('text');`

---

[Link to the coding papa website](www.thecodingpapa.com)

![this is the image](https://picsum.photos/200)


```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

```java
  Future<ItemModel> getItem(String itemKey) async {
    DocumentReference<Map<String, dynamic>> documentReference =
        FirebaseFirestore.instance.collection(COL_ITEMS).doc(itemKey);
    final DocumentSnapshot<Map<String, dynamic>> documentSnapshot =
        await documentReference.get();
    ItemModel itemModel = ItemModel.fromSnapshot(documentSnapshot);
    return itemModel;
  }
```

```yaml
dev_dependencies:
  flutter_test:
    sdk: flutter
```
