# ProcessDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to [**StatusType**](StatusType.md) |  | [optional] 
**CateringEventsProcessedInfo** | Pointer to [**[]CateringEventsProcessedInfoType**](CateringEventsProcessedInfoType.md) | Status/Info of the processed events. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProcessDetails

`func NewProcessDetails() *ProcessDetails`

NewProcessDetails instantiates a new ProcessDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProcessDetailsWithDefaults

`func NewProcessDetailsWithDefaults() *ProcessDetails`

NewProcessDetailsWithDefaults instantiates a new ProcessDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *ProcessDetails) GetStatus() StatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ProcessDetails) GetStatusOk() (*StatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ProcessDetails) SetStatus(v StatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ProcessDetails) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCateringEventsProcessedInfo

`func (o *ProcessDetails) GetCateringEventsProcessedInfo() []CateringEventsProcessedInfoType`

GetCateringEventsProcessedInfo returns the CateringEventsProcessedInfo field if non-nil, zero value otherwise.

### GetCateringEventsProcessedInfoOk

`func (o *ProcessDetails) GetCateringEventsProcessedInfoOk() (*[]CateringEventsProcessedInfoType, bool)`

GetCateringEventsProcessedInfoOk returns a tuple with the CateringEventsProcessedInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringEventsProcessedInfo

`func (o *ProcessDetails) SetCateringEventsProcessedInfo(v []CateringEventsProcessedInfoType)`

SetCateringEventsProcessedInfo sets CateringEventsProcessedInfo field to given value.

### HasCateringEventsProcessedInfo

`func (o *ProcessDetails) HasCateringEventsProcessedInfo() bool`

HasCateringEventsProcessedInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ProcessDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProcessDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProcessDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProcessDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProcessDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProcessDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProcessDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProcessDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


