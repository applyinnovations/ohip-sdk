# HoldItemInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Number of items to hold. | [optional] 
**ItemCode** | Pointer to **string** | Item Code to hold. | [optional] 
**ItemId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewHoldItemInfoType

`func NewHoldItemInfoType() *HoldItemInfoType`

NewHoldItemInfoType instantiates a new HoldItemInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHoldItemInfoTypeWithDefaults

`func NewHoldItemInfoTypeWithDefaults() *HoldItemInfoType`

NewHoldItemInfoTypeWithDefaults instantiates a new HoldItemInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *HoldItemInfoType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *HoldItemInfoType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *HoldItemInfoType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *HoldItemInfoType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetItemCode

`func (o *HoldItemInfoType) GetItemCode() string`

GetItemCode returns the ItemCode field if non-nil, zero value otherwise.

### GetItemCodeOk

`func (o *HoldItemInfoType) GetItemCodeOk() (*string, bool)`

GetItemCodeOk returns a tuple with the ItemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemCode

`func (o *HoldItemInfoType) SetItemCode(v string)`

SetItemCode sets ItemCode field to given value.

### HasItemCode

`func (o *HoldItemInfoType) HasItemCode() bool`

HasItemCode returns a boolean if a field has been set.

### GetItemId

`func (o *HoldItemInfoType) GetItemId() UniqueIDType`

GetItemId returns the ItemId field if non-nil, zero value otherwise.

### GetItemIdOk

`func (o *HoldItemInfoType) GetItemIdOk() (*UniqueIDType, bool)`

GetItemIdOk returns a tuple with the ItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemId

`func (o *HoldItemInfoType) SetItemId(v UniqueIDType)`

SetItemId sets ItemId field to given value.

### HasItemId

`func (o *HoldItemInfoType) HasItemId() bool`

HasItemId returns a boolean if a field has been set.

### GetTimeSpan

`func (o *HoldItemInfoType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *HoldItemInfoType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *HoldItemInfoType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *HoldItemInfoType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


