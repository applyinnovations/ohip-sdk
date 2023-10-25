# PutDailyPlanCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DailyPlanCodes** | Pointer to [**[]DailyPlanCodeType**](DailyPlanCodeType.md) | Details for daily plan code along with associated transaction codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutDailyPlanCodesRequest

`func NewPutDailyPlanCodesRequest() *PutDailyPlanCodesRequest`

NewPutDailyPlanCodesRequest instantiates a new PutDailyPlanCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutDailyPlanCodesRequestWithDefaults

`func NewPutDailyPlanCodesRequestWithDefaults() *PutDailyPlanCodesRequest`

NewPutDailyPlanCodesRequestWithDefaults instantiates a new PutDailyPlanCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDailyPlanCodes

`func (o *PutDailyPlanCodesRequest) GetDailyPlanCodes() []DailyPlanCodeType`

GetDailyPlanCodes returns the DailyPlanCodes field if non-nil, zero value otherwise.

### GetDailyPlanCodesOk

`func (o *PutDailyPlanCodesRequest) GetDailyPlanCodesOk() (*[]DailyPlanCodeType, bool)`

GetDailyPlanCodesOk returns a tuple with the DailyPlanCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyPlanCodes

`func (o *PutDailyPlanCodesRequest) SetDailyPlanCodes(v []DailyPlanCodeType)`

SetDailyPlanCodes sets DailyPlanCodes field to given value.

### HasDailyPlanCodes

`func (o *PutDailyPlanCodesRequest) HasDailyPlanCodes() bool`

HasDailyPlanCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PutDailyPlanCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutDailyPlanCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutDailyPlanCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutDailyPlanCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutDailyPlanCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutDailyPlanCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutDailyPlanCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutDailyPlanCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


