# GuaranteeCodeScheduleToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuaranteeCodeSchedule** | Pointer to [**GuaranteeCodeScheduleType**](GuaranteeCodeScheduleType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGuaranteeCodeScheduleToBeChanged

`func NewGuaranteeCodeScheduleToBeChanged() *GuaranteeCodeScheduleToBeChanged`

NewGuaranteeCodeScheduleToBeChanged instantiates a new GuaranteeCodeScheduleToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuaranteeCodeScheduleToBeChangedWithDefaults

`func NewGuaranteeCodeScheduleToBeChangedWithDefaults() *GuaranteeCodeScheduleToBeChanged`

NewGuaranteeCodeScheduleToBeChangedWithDefaults instantiates a new GuaranteeCodeScheduleToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuaranteeCodeSchedule

`func (o *GuaranteeCodeScheduleToBeChanged) GetGuaranteeCodeSchedule() GuaranteeCodeScheduleType`

GetGuaranteeCodeSchedule returns the GuaranteeCodeSchedule field if non-nil, zero value otherwise.

### GetGuaranteeCodeScheduleOk

`func (o *GuaranteeCodeScheduleToBeChanged) GetGuaranteeCodeScheduleOk() (*GuaranteeCodeScheduleType, bool)`

GetGuaranteeCodeScheduleOk returns a tuple with the GuaranteeCodeSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCodeSchedule

`func (o *GuaranteeCodeScheduleToBeChanged) SetGuaranteeCodeSchedule(v GuaranteeCodeScheduleType)`

SetGuaranteeCodeSchedule sets GuaranteeCodeSchedule field to given value.

### HasGuaranteeCodeSchedule

`func (o *GuaranteeCodeScheduleToBeChanged) HasGuaranteeCodeSchedule() bool`

HasGuaranteeCodeSchedule returns a boolean if a field has been set.

### GetLinks

`func (o *GuaranteeCodeScheduleToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GuaranteeCodeScheduleToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GuaranteeCodeScheduleToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GuaranteeCodeScheduleToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GuaranteeCodeScheduleToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuaranteeCodeScheduleToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuaranteeCodeScheduleToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuaranteeCodeScheduleToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


