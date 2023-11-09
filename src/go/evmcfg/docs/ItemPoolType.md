# ItemPoolType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Item Pools Code | [optional] 
**Description** | Pointer to **string** | Description of the Item Pool code. | [optional] 
**DisplaySequence** | Pointer to **float32** | Sequence of Item Pool code. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code which belong to Item Pool | [optional] 
**ItemClass** | Pointer to **string** | Item Class which associated to Item codes. | [optional] 
**ItemIds** | Pointer to [**ItemIDListType**](ItemIDListType.md) |  | [optional] 

## Methods

### NewItemPoolType

`func NewItemPoolType() *ItemPoolType`

NewItemPoolType instantiates a new ItemPoolType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewItemPoolTypeWithDefaults

`func NewItemPoolTypeWithDefaults() *ItemPoolType`

NewItemPoolTypeWithDefaults instantiates a new ItemPoolType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ItemPoolType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ItemPoolType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ItemPoolType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ItemPoolType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *ItemPoolType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ItemPoolType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ItemPoolType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ItemPoolType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *ItemPoolType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *ItemPoolType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *ItemPoolType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *ItemPoolType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetHotelId

`func (o *ItemPoolType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ItemPoolType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ItemPoolType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ItemPoolType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetItemClass

`func (o *ItemPoolType) GetItemClass() string`

GetItemClass returns the ItemClass field if non-nil, zero value otherwise.

### GetItemClassOk

`func (o *ItemPoolType) GetItemClassOk() (*string, bool)`

GetItemClassOk returns a tuple with the ItemClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClass

`func (o *ItemPoolType) SetItemClass(v string)`

SetItemClass sets ItemClass field to given value.

### HasItemClass

`func (o *ItemPoolType) HasItemClass() bool`

HasItemClass returns a boolean if a field has been set.

### GetItemIds

`func (o *ItemPoolType) GetItemIds() ItemIDListType`

GetItemIds returns the ItemIds field if non-nil, zero value otherwise.

### GetItemIdsOk

`func (o *ItemPoolType) GetItemIdsOk() (*ItemIDListType, bool)`

GetItemIdsOk returns a tuple with the ItemIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemIds

`func (o *ItemPoolType) SetItemIds(v ItemIDListType)`

SetItemIds sets ItemIds field to given value.

### HasItemIds

`func (o *ItemPoolType) HasItemIds() bool`

HasItemIds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


