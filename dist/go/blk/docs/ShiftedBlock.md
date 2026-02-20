# ShiftedBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CateringEventsProcessedInfo** | Pointer to [**[]CateringEventsProcessedInfoType**](CateringEventsProcessedInfoType.md) | Status/Info of the processed events. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewShiftedBlock

`func NewShiftedBlock() *ShiftedBlock`

NewShiftedBlock instantiates a new ShiftedBlock object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewShiftedBlockWithDefaults

`func NewShiftedBlockWithDefaults() *ShiftedBlock`

NewShiftedBlockWithDefaults instantiates a new ShiftedBlock object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCateringEventsProcessedInfo

`func (o *ShiftedBlock) GetCateringEventsProcessedInfo() []CateringEventsProcessedInfoType`

GetCateringEventsProcessedInfo returns the CateringEventsProcessedInfo field if non-nil, zero value otherwise.

### GetCateringEventsProcessedInfoOk

`func (o *ShiftedBlock) GetCateringEventsProcessedInfoOk() (*[]CateringEventsProcessedInfoType, bool)`

GetCateringEventsProcessedInfoOk returns a tuple with the CateringEventsProcessedInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringEventsProcessedInfo

`func (o *ShiftedBlock) SetCateringEventsProcessedInfo(v []CateringEventsProcessedInfoType)`

SetCateringEventsProcessedInfo sets CateringEventsProcessedInfo field to given value.

### HasCateringEventsProcessedInfo

`func (o *ShiftedBlock) HasCateringEventsProcessedInfo() bool`

HasCateringEventsProcessedInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ShiftedBlock) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ShiftedBlock) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ShiftedBlock) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ShiftedBlock) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ShiftedBlock) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ShiftedBlock) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ShiftedBlock) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ShiftedBlock) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


