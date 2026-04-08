# MembershipPointsToCalculate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipPointsCalculation** | Pointer to [**MembershipPointsCalculationType**](MembershipPointsCalculationType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipPointsToCalculate

`func NewMembershipPointsToCalculate() *MembershipPointsToCalculate`

NewMembershipPointsToCalculate instantiates a new MembershipPointsToCalculate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipPointsToCalculateWithDefaults

`func NewMembershipPointsToCalculateWithDefaults() *MembershipPointsToCalculate`

NewMembershipPointsToCalculateWithDefaults instantiates a new MembershipPointsToCalculate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipPointsCalculation

`func (o *MembershipPointsToCalculate) GetMembershipPointsCalculation() MembershipPointsCalculationType`

GetMembershipPointsCalculation returns the MembershipPointsCalculation field if non-nil, zero value otherwise.

### GetMembershipPointsCalculationOk

`func (o *MembershipPointsToCalculate) GetMembershipPointsCalculationOk() (*MembershipPointsCalculationType, bool)`

GetMembershipPointsCalculationOk returns a tuple with the MembershipPointsCalculation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipPointsCalculation

`func (o *MembershipPointsToCalculate) SetMembershipPointsCalculation(v MembershipPointsCalculationType)`

SetMembershipPointsCalculation sets MembershipPointsCalculation field to given value.

### HasMembershipPointsCalculation

`func (o *MembershipPointsToCalculate) HasMembershipPointsCalculation() bool`

HasMembershipPointsCalculation returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipPointsToCalculate) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipPointsToCalculate) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipPointsToCalculate) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipPointsToCalculate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipPointsToCalculate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipPointsToCalculate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipPointsToCalculate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipPointsToCalculate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


