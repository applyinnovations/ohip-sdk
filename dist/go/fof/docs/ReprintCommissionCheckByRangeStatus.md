# ReprintCommissionCheckByRangeStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReprintCheckReport** | Pointer to [**CommissionPaymentReportType**](CommissionPaymentReportType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReprintCommissionCheckByRangeStatus

`func NewReprintCommissionCheckByRangeStatus() *ReprintCommissionCheckByRangeStatus`

NewReprintCommissionCheckByRangeStatus instantiates a new ReprintCommissionCheckByRangeStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReprintCommissionCheckByRangeStatusWithDefaults

`func NewReprintCommissionCheckByRangeStatusWithDefaults() *ReprintCommissionCheckByRangeStatus`

NewReprintCommissionCheckByRangeStatusWithDefaults instantiates a new ReprintCommissionCheckByRangeStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReprintCommissionCheckByRangeStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReprintCommissionCheckByRangeStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReprintCommissionCheckByRangeStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReprintCommissionCheckByRangeStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReprintCheckReport

`func (o *ReprintCommissionCheckByRangeStatus) GetReprintCheckReport() CommissionPaymentReportType`

GetReprintCheckReport returns the ReprintCheckReport field if non-nil, zero value otherwise.

### GetReprintCheckReportOk

`func (o *ReprintCommissionCheckByRangeStatus) GetReprintCheckReportOk() (*CommissionPaymentReportType, bool)`

GetReprintCheckReportOk returns a tuple with the ReprintCheckReport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReprintCheckReport

`func (o *ReprintCommissionCheckByRangeStatus) SetReprintCheckReport(v CommissionPaymentReportType)`

SetReprintCheckReport sets ReprintCheckReport field to given value.

### HasReprintCheckReport

`func (o *ReprintCommissionCheckByRangeStatus) HasReprintCheckReport() bool`

HasReprintCheckReport returns a boolean if a field has been set.

### GetWarnings

`func (o *ReprintCommissionCheckByRangeStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReprintCommissionCheckByRangeStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReprintCommissionCheckByRangeStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReprintCommissionCheckByRangeStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


