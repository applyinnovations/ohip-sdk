# InventoryItemTemplateItemType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArticleNumber** | Pointer to **string** | Specifies the article number of the item. | [optional] 
**AttributeId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AttributeName** | Pointer to **string** | Specifies the name of the default attribute for the item in the inventory item template. | [optional] 
**ClassSequence** | Pointer to **int32** | Specifies the sorting sequence number for the item class. | [optional] 
**Id** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Name** | Pointer to **string** | Specifies the name of the item. | [optional] 
**Quantity** | Pointer to **int32** | Specifies the quantity of the item. | [optional] 
**RateCode** | Pointer to **string** | Specifies the code of the default rate for the item in the inventory item template. | [optional] 
**RateId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**RateName** | Pointer to **string** | Specifies the name of the default rate for the item in the inventory item template. | [optional] 
**Sequence** | Pointer to **int32** | Specifies the sorting sequence number for the item. | [optional] 

## Methods

### NewInventoryItemTemplateItemType

`func NewInventoryItemTemplateItemType() *InventoryItemTemplateItemType`

NewInventoryItemTemplateItemType instantiates a new InventoryItemTemplateItemType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryItemTemplateItemTypeWithDefaults

`func NewInventoryItemTemplateItemTypeWithDefaults() *InventoryItemTemplateItemType`

NewInventoryItemTemplateItemTypeWithDefaults instantiates a new InventoryItemTemplateItemType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArticleNumber

`func (o *InventoryItemTemplateItemType) GetArticleNumber() string`

GetArticleNumber returns the ArticleNumber field if non-nil, zero value otherwise.

### GetArticleNumberOk

`func (o *InventoryItemTemplateItemType) GetArticleNumberOk() (*string, bool)`

GetArticleNumberOk returns a tuple with the ArticleNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticleNumber

`func (o *InventoryItemTemplateItemType) SetArticleNumber(v string)`

SetArticleNumber sets ArticleNumber field to given value.

### HasArticleNumber

`func (o *InventoryItemTemplateItemType) HasArticleNumber() bool`

HasArticleNumber returns a boolean if a field has been set.

### GetAttributeId

`func (o *InventoryItemTemplateItemType) GetAttributeId() UniqueIDType`

GetAttributeId returns the AttributeId field if non-nil, zero value otherwise.

### GetAttributeIdOk

`func (o *InventoryItemTemplateItemType) GetAttributeIdOk() (*UniqueIDType, bool)`

GetAttributeIdOk returns a tuple with the AttributeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeId

`func (o *InventoryItemTemplateItemType) SetAttributeId(v UniqueIDType)`

SetAttributeId sets AttributeId field to given value.

### HasAttributeId

`func (o *InventoryItemTemplateItemType) HasAttributeId() bool`

HasAttributeId returns a boolean if a field has been set.

### GetAttributeName

`func (o *InventoryItemTemplateItemType) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *InventoryItemTemplateItemType) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *InventoryItemTemplateItemType) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *InventoryItemTemplateItemType) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetClassSequence

`func (o *InventoryItemTemplateItemType) GetClassSequence() int32`

GetClassSequence returns the ClassSequence field if non-nil, zero value otherwise.

### GetClassSequenceOk

`func (o *InventoryItemTemplateItemType) GetClassSequenceOk() (*int32, bool)`

GetClassSequenceOk returns a tuple with the ClassSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassSequence

`func (o *InventoryItemTemplateItemType) SetClassSequence(v int32)`

SetClassSequence sets ClassSequence field to given value.

### HasClassSequence

`func (o *InventoryItemTemplateItemType) HasClassSequence() bool`

HasClassSequence returns a boolean if a field has been set.

### GetId

`func (o *InventoryItemTemplateItemType) GetId() UniqueIDType`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InventoryItemTemplateItemType) GetIdOk() (*UniqueIDType, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InventoryItemTemplateItemType) SetId(v UniqueIDType)`

SetId sets Id field to given value.

### HasId

`func (o *InventoryItemTemplateItemType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *InventoryItemTemplateItemType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *InventoryItemTemplateItemType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *InventoryItemTemplateItemType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *InventoryItemTemplateItemType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetQuantity

`func (o *InventoryItemTemplateItemType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *InventoryItemTemplateItemType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *InventoryItemTemplateItemType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *InventoryItemTemplateItemType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetRateCode

`func (o *InventoryItemTemplateItemType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *InventoryItemTemplateItemType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *InventoryItemTemplateItemType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *InventoryItemTemplateItemType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRateId

`func (o *InventoryItemTemplateItemType) GetRateId() UniqueIDType`

GetRateId returns the RateId field if non-nil, zero value otherwise.

### GetRateIdOk

`func (o *InventoryItemTemplateItemType) GetRateIdOk() (*UniqueIDType, bool)`

GetRateIdOk returns a tuple with the RateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateId

`func (o *InventoryItemTemplateItemType) SetRateId(v UniqueIDType)`

SetRateId sets RateId field to given value.

### HasRateId

`func (o *InventoryItemTemplateItemType) HasRateId() bool`

HasRateId returns a boolean if a field has been set.

### GetRateName

`func (o *InventoryItemTemplateItemType) GetRateName() string`

GetRateName returns the RateName field if non-nil, zero value otherwise.

### GetRateNameOk

`func (o *InventoryItemTemplateItemType) GetRateNameOk() (*string, bool)`

GetRateNameOk returns a tuple with the RateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateName

`func (o *InventoryItemTemplateItemType) SetRateName(v string)`

SetRateName sets RateName field to given value.

### HasRateName

`func (o *InventoryItemTemplateItemType) HasRateName() bool`

HasRateName returns a boolean if a field has been set.

### GetSequence

`func (o *InventoryItemTemplateItemType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *InventoryItemTemplateItemType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *InventoryItemTemplateItemType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *InventoryItemTemplateItemType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


