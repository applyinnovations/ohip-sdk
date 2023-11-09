# BlockAllocationRangeTypeOverbookListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Overbook** | Pointer to **bool** | A true value indicates that the date/room type should be overbooked for inventory. A false value indicates that this combination should be excluded from range. | [optional] 
**RoomType** | Pointer to **string** | Room type that has to be overbooked or excluded. | [optional] 
**StayDate** | Pointer to **string** | Date which has to be overbooked or excluded. | [optional] 

## Methods

### NewBlockAllocationRangeTypeOverbookListInner

`func NewBlockAllocationRangeTypeOverbookListInner() *BlockAllocationRangeTypeOverbookListInner`

NewBlockAllocationRangeTypeOverbookListInner instantiates a new BlockAllocationRangeTypeOverbookListInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAllocationRangeTypeOverbookListInnerWithDefaults

`func NewBlockAllocationRangeTypeOverbookListInnerWithDefaults() *BlockAllocationRangeTypeOverbookListInner`

NewBlockAllocationRangeTypeOverbookListInnerWithDefaults instantiates a new BlockAllocationRangeTypeOverbookListInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOverbook

`func (o *BlockAllocationRangeTypeOverbookListInner) GetOverbook() bool`

GetOverbook returns the Overbook field if non-nil, zero value otherwise.

### GetOverbookOk

`func (o *BlockAllocationRangeTypeOverbookListInner) GetOverbookOk() (*bool, bool)`

GetOverbookOk returns a tuple with the Overbook field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverbook

`func (o *BlockAllocationRangeTypeOverbookListInner) SetOverbook(v bool)`

SetOverbook sets Overbook field to given value.

### HasOverbook

`func (o *BlockAllocationRangeTypeOverbookListInner) HasOverbook() bool`

HasOverbook returns a boolean if a field has been set.

### GetRoomType

`func (o *BlockAllocationRangeTypeOverbookListInner) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *BlockAllocationRangeTypeOverbookListInner) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *BlockAllocationRangeTypeOverbookListInner) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *BlockAllocationRangeTypeOverbookListInner) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetStayDate

`func (o *BlockAllocationRangeTypeOverbookListInner) GetStayDate() string`

GetStayDate returns the StayDate field if non-nil, zero value otherwise.

### GetStayDateOk

`func (o *BlockAllocationRangeTypeOverbookListInner) GetStayDateOk() (*string, bool)`

GetStayDateOk returns a tuple with the StayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDate

`func (o *BlockAllocationRangeTypeOverbookListInner) SetStayDate(v string)`

SetStayDate sets StayDate field to given value.

### HasStayDate

`func (o *BlockAllocationRangeTypeOverbookListInner) HasStayDate() bool`

HasStayDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


