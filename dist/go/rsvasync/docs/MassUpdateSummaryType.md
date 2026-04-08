# MassUpdateSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MassUpdateOutcomes** | Pointer to [**[]MassUpdateOutcomeType**](MassUpdateOutcomeType.md) | Collection of outcome of mass update to reservations. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMassUpdateSummaryType

`func NewMassUpdateSummaryType() *MassUpdateSummaryType`

NewMassUpdateSummaryType instantiates a new MassUpdateSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassUpdateSummaryTypeWithDefaults

`func NewMassUpdateSummaryTypeWithDefaults() *MassUpdateSummaryType`

NewMassUpdateSummaryTypeWithDefaults instantiates a new MassUpdateSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMassUpdateOutcomes

`func (o *MassUpdateSummaryType) GetMassUpdateOutcomes() []MassUpdateOutcomeType`

GetMassUpdateOutcomes returns the MassUpdateOutcomes field if non-nil, zero value otherwise.

### GetMassUpdateOutcomesOk

`func (o *MassUpdateSummaryType) GetMassUpdateOutcomesOk() (*[]MassUpdateOutcomeType, bool)`

GetMassUpdateOutcomesOk returns a tuple with the MassUpdateOutcomes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMassUpdateOutcomes

`func (o *MassUpdateSummaryType) SetMassUpdateOutcomes(v []MassUpdateOutcomeType)`

SetMassUpdateOutcomes sets MassUpdateOutcomes field to given value.

### HasMassUpdateOutcomes

`func (o *MassUpdateSummaryType) HasMassUpdateOutcomes() bool`

HasMassUpdateOutcomes returns a boolean if a field has been set.

### GetLinks

`func (o *MassUpdateSummaryType) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MassUpdateSummaryType) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MassUpdateSummaryType) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MassUpdateSummaryType) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MassUpdateSummaryType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MassUpdateSummaryType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MassUpdateSummaryType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MassUpdateSummaryType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


