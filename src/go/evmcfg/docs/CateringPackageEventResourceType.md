# CateringPackageEventResourceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsShareable** | Pointer to **bool** | Defines if the Function Space is shareable. | [optional] 
**ItemAttribute** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ItemRate** | Pointer to **string** | Rate Code associated with the Item. | [optional] 
**Name** | Pointer to **string** | Name of the Resource. | [optional] 
**OrderBy** | Pointer to **int32** | Defines the Display Order of the Item or Pickup Sequence during the booking process for a Function Space. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Quantity** | Pointer to **int32** | Defines the quantity of the Item. | [optional] 
**ResourceId** | Pointer to **string** | Unique Identifier for a Resource associated with a particular Catering Package Event. | [optional] 
**ResourceNotes** | Pointer to [**CateringPackageResourceNoteListType**](CateringPackageResourceNoteListType.md) |  | [optional] 
**RevenueTypes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**RoomRate** | Pointer to **string** | RateCode associated with the Function Space. | [optional] 
**RoomSetup** | Pointer to **string** | Setup code of th Function Space. | [optional] 
**Type** | Pointer to [**EventResourceType**](EventResourceType.md) |  | [optional] 

## Methods

### NewCateringPackageEventResourceType

`func NewCateringPackageEventResourceType() *CateringPackageEventResourceType`

NewCateringPackageEventResourceType instantiates a new CateringPackageEventResourceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringPackageEventResourceTypeWithDefaults

`func NewCateringPackageEventResourceTypeWithDefaults() *CateringPackageEventResourceType`

NewCateringPackageEventResourceTypeWithDefaults instantiates a new CateringPackageEventResourceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsShareable

`func (o *CateringPackageEventResourceType) GetIsShareable() bool`

GetIsShareable returns the IsShareable field if non-nil, zero value otherwise.

### GetIsShareableOk

`func (o *CateringPackageEventResourceType) GetIsShareableOk() (*bool, bool)`

GetIsShareableOk returns a tuple with the IsShareable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsShareable

`func (o *CateringPackageEventResourceType) SetIsShareable(v bool)`

SetIsShareable sets IsShareable field to given value.

### HasIsShareable

`func (o *CateringPackageEventResourceType) HasIsShareable() bool`

HasIsShareable returns a boolean if a field has been set.

### GetItemAttribute

`func (o *CateringPackageEventResourceType) GetItemAttribute() UniqueIDType`

GetItemAttribute returns the ItemAttribute field if non-nil, zero value otherwise.

### GetItemAttributeOk

`func (o *CateringPackageEventResourceType) GetItemAttributeOk() (*UniqueIDType, bool)`

GetItemAttributeOk returns a tuple with the ItemAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemAttribute

`func (o *CateringPackageEventResourceType) SetItemAttribute(v UniqueIDType)`

SetItemAttribute sets ItemAttribute field to given value.

### HasItemAttribute

`func (o *CateringPackageEventResourceType) HasItemAttribute() bool`

HasItemAttribute returns a boolean if a field has been set.

### GetItemRate

`func (o *CateringPackageEventResourceType) GetItemRate() string`

GetItemRate returns the ItemRate field if non-nil, zero value otherwise.

### GetItemRateOk

`func (o *CateringPackageEventResourceType) GetItemRateOk() (*string, bool)`

GetItemRateOk returns a tuple with the ItemRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemRate

`func (o *CateringPackageEventResourceType) SetItemRate(v string)`

SetItemRate sets ItemRate field to given value.

### HasItemRate

`func (o *CateringPackageEventResourceType) HasItemRate() bool`

HasItemRate returns a boolean if a field has been set.

### GetName

`func (o *CateringPackageEventResourceType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CateringPackageEventResourceType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CateringPackageEventResourceType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CateringPackageEventResourceType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrderBy

`func (o *CateringPackageEventResourceType) GetOrderBy() int32`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *CateringPackageEventResourceType) GetOrderByOk() (*int32, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *CateringPackageEventResourceType) SetOrderBy(v int32)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *CateringPackageEventResourceType) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetPrice

`func (o *CateringPackageEventResourceType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *CateringPackageEventResourceType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *CateringPackageEventResourceType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *CateringPackageEventResourceType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetQuantity

`func (o *CateringPackageEventResourceType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *CateringPackageEventResourceType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *CateringPackageEventResourceType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *CateringPackageEventResourceType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetResourceId

`func (o *CateringPackageEventResourceType) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *CateringPackageEventResourceType) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *CateringPackageEventResourceType) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *CateringPackageEventResourceType) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetResourceNotes

`func (o *CateringPackageEventResourceType) GetResourceNotes() CateringPackageResourceNoteListType`

GetResourceNotes returns the ResourceNotes field if non-nil, zero value otherwise.

### GetResourceNotesOk

`func (o *CateringPackageEventResourceType) GetResourceNotesOk() (*CateringPackageResourceNoteListType, bool)`

GetResourceNotesOk returns a tuple with the ResourceNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceNotes

`func (o *CateringPackageEventResourceType) SetResourceNotes(v CateringPackageResourceNoteListType)`

SetResourceNotes sets ResourceNotes field to given value.

### HasResourceNotes

`func (o *CateringPackageEventResourceType) HasResourceNotes() bool`

HasResourceNotes returns a boolean if a field has been set.

### GetRevenueTypes

`func (o *CateringPackageEventResourceType) GetRevenueTypes() CodeListType`

GetRevenueTypes returns the RevenueTypes field if non-nil, zero value otherwise.

### GetRevenueTypesOk

`func (o *CateringPackageEventResourceType) GetRevenueTypesOk() (*CodeListType, bool)`

GetRevenueTypesOk returns a tuple with the RevenueTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueTypes

`func (o *CateringPackageEventResourceType) SetRevenueTypes(v CodeListType)`

SetRevenueTypes sets RevenueTypes field to given value.

### HasRevenueTypes

`func (o *CateringPackageEventResourceType) HasRevenueTypes() bool`

HasRevenueTypes returns a boolean if a field has been set.

### GetRoomRate

`func (o *CateringPackageEventResourceType) GetRoomRate() string`

GetRoomRate returns the RoomRate field if non-nil, zero value otherwise.

### GetRoomRateOk

`func (o *CateringPackageEventResourceType) GetRoomRateOk() (*string, bool)`

GetRoomRateOk returns a tuple with the RoomRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRate

`func (o *CateringPackageEventResourceType) SetRoomRate(v string)`

SetRoomRate sets RoomRate field to given value.

### HasRoomRate

`func (o *CateringPackageEventResourceType) HasRoomRate() bool`

HasRoomRate returns a boolean if a field has been set.

### GetRoomSetup

`func (o *CateringPackageEventResourceType) GetRoomSetup() string`

GetRoomSetup returns the RoomSetup field if non-nil, zero value otherwise.

### GetRoomSetupOk

`func (o *CateringPackageEventResourceType) GetRoomSetupOk() (*string, bool)`

GetRoomSetupOk returns a tuple with the RoomSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSetup

`func (o *CateringPackageEventResourceType) SetRoomSetup(v string)`

SetRoomSetup sets RoomSetup field to given value.

### HasRoomSetup

`func (o *CateringPackageEventResourceType) HasRoomSetup() bool`

HasRoomSetup returns a boolean if a field has been set.

### GetType

`func (o *CateringPackageEventResourceType) GetType() EventResourceType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CateringPackageEventResourceType) GetTypeOk() (*EventResourceType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CateringPackageEventResourceType) SetType(v EventResourceType)`

SetType sets Type field to given value.

### HasType

`func (o *CateringPackageEventResourceType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


