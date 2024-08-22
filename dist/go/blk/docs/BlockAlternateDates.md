# BlockAlternateDates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAlternateDates** | Pointer to [**[]BlockAlternateDateType**](BlockAlternateDateType.md) | Contains a list of Block Alternate Dates. | [optional] 
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockAlternateDates

`func NewBlockAlternateDates() *BlockAlternateDates`

NewBlockAlternateDates instantiates a new BlockAlternateDates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAlternateDatesWithDefaults

`func NewBlockAlternateDatesWithDefaults() *BlockAlternateDates`

NewBlockAlternateDatesWithDefaults instantiates a new BlockAlternateDates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAlternateDates

`func (o *BlockAlternateDates) GetBlockAlternateDates() []BlockAlternateDateType`

GetBlockAlternateDates returns the BlockAlternateDates field if non-nil, zero value otherwise.

### GetBlockAlternateDatesOk

`func (o *BlockAlternateDates) GetBlockAlternateDatesOk() (*[]BlockAlternateDateType, bool)`

GetBlockAlternateDatesOk returns a tuple with the BlockAlternateDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAlternateDates

`func (o *BlockAlternateDates) SetBlockAlternateDates(v []BlockAlternateDateType)`

SetBlockAlternateDates sets BlockAlternateDates field to given value.

### HasBlockAlternateDates

`func (o *BlockAlternateDates) HasBlockAlternateDates() bool`

HasBlockAlternateDates returns a boolean if a field has been set.

### GetBlockIdList

`func (o *BlockAlternateDates) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *BlockAlternateDates) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *BlockAlternateDates) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *BlockAlternateDates) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockAlternateDates) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockAlternateDates) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockAlternateDates) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockAlternateDates) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *BlockAlternateDates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockAlternateDates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockAlternateDates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockAlternateDates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockAlternateDates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockAlternateDates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockAlternateDates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockAlternateDates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


