# CorporateDivisionsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorporateDivisions** | Pointer to [**[]CorporateDivisionType**](CorporateDivisionType.md) | List of Corporate Divisions. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCorporateDivisionsCriteria

`func NewCorporateDivisionsCriteria() *CorporateDivisionsCriteria`

NewCorporateDivisionsCriteria instantiates a new CorporateDivisionsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorporateDivisionsCriteriaWithDefaults

`func NewCorporateDivisionsCriteriaWithDefaults() *CorporateDivisionsCriteria`

NewCorporateDivisionsCriteriaWithDefaults instantiates a new CorporateDivisionsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorporateDivisions

`func (o *CorporateDivisionsCriteria) GetCorporateDivisions() []CorporateDivisionType`

GetCorporateDivisions returns the CorporateDivisions field if non-nil, zero value otherwise.

### GetCorporateDivisionsOk

`func (o *CorporateDivisionsCriteria) GetCorporateDivisionsOk() (*[]CorporateDivisionType, bool)`

GetCorporateDivisionsOk returns a tuple with the CorporateDivisions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorporateDivisions

`func (o *CorporateDivisionsCriteria) SetCorporateDivisions(v []CorporateDivisionType)`

SetCorporateDivisions sets CorporateDivisions field to given value.

### HasCorporateDivisions

`func (o *CorporateDivisionsCriteria) HasCorporateDivisions() bool`

HasCorporateDivisions returns a boolean if a field has been set.

### GetLinks

`func (o *CorporateDivisionsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CorporateDivisionsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CorporateDivisionsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CorporateDivisionsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CorporateDivisionsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CorporateDivisionsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CorporateDivisionsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CorporateDivisionsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


