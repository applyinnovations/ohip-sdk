# PutAlternateDatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAlternateDates** | Pointer to [**[]BlockAlternateDateType**](BlockAlternateDateType.md) | Contains a list of Block Alternate Dates. | [optional] 
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutAlternateDatesRequest

`func NewPutAlternateDatesRequest() *PutAlternateDatesRequest`

NewPutAlternateDatesRequest instantiates a new PutAlternateDatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutAlternateDatesRequestWithDefaults

`func NewPutAlternateDatesRequestWithDefaults() *PutAlternateDatesRequest`

NewPutAlternateDatesRequestWithDefaults instantiates a new PutAlternateDatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAlternateDates

`func (o *PutAlternateDatesRequest) GetBlockAlternateDates() []BlockAlternateDateType`

GetBlockAlternateDates returns the BlockAlternateDates field if non-nil, zero value otherwise.

### GetBlockAlternateDatesOk

`func (o *PutAlternateDatesRequest) GetBlockAlternateDatesOk() (*[]BlockAlternateDateType, bool)`

GetBlockAlternateDatesOk returns a tuple with the BlockAlternateDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAlternateDates

`func (o *PutAlternateDatesRequest) SetBlockAlternateDates(v []BlockAlternateDateType)`

SetBlockAlternateDates sets BlockAlternateDates field to given value.

### HasBlockAlternateDates

`func (o *PutAlternateDatesRequest) HasBlockAlternateDates() bool`

HasBlockAlternateDates returns a boolean if a field has been set.

### GetBlockIdList

`func (o *PutAlternateDatesRequest) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *PutAlternateDatesRequest) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *PutAlternateDatesRequest) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *PutAlternateDatesRequest) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetHotelId

`func (o *PutAlternateDatesRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutAlternateDatesRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutAlternateDatesRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutAlternateDatesRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PutAlternateDatesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutAlternateDatesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutAlternateDatesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutAlternateDatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutAlternateDatesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutAlternateDatesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutAlternateDatesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutAlternateDatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


