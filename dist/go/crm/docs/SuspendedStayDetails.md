# SuspendedStayDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SuspendedStayDetailsInfo** | Pointer to [**SuspendedStayDetailsType**](SuspendedStayDetailsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSuspendedStayDetails

`func NewSuspendedStayDetails() *SuspendedStayDetails`

NewSuspendedStayDetails instantiates a new SuspendedStayDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSuspendedStayDetailsWithDefaults

`func NewSuspendedStayDetailsWithDefaults() *SuspendedStayDetails`

NewSuspendedStayDetailsWithDefaults instantiates a new SuspendedStayDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuspendedStayDetailsInfo

`func (o *SuspendedStayDetails) GetSuspendedStayDetailsInfo() SuspendedStayDetailsType`

GetSuspendedStayDetailsInfo returns the SuspendedStayDetailsInfo field if non-nil, zero value otherwise.

### GetSuspendedStayDetailsInfoOk

`func (o *SuspendedStayDetails) GetSuspendedStayDetailsInfoOk() (*SuspendedStayDetailsType, bool)`

GetSuspendedStayDetailsInfoOk returns a tuple with the SuspendedStayDetailsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuspendedStayDetailsInfo

`func (o *SuspendedStayDetails) SetSuspendedStayDetailsInfo(v SuspendedStayDetailsType)`

SetSuspendedStayDetailsInfo sets SuspendedStayDetailsInfo field to given value.

### HasSuspendedStayDetailsInfo

`func (o *SuspendedStayDetails) HasSuspendedStayDetailsInfo() bool`

HasSuspendedStayDetailsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *SuspendedStayDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SuspendedStayDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SuspendedStayDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SuspendedStayDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SuspendedStayDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SuspendedStayDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SuspendedStayDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SuspendedStayDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


