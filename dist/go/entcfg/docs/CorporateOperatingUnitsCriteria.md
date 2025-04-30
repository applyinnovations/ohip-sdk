# CorporateOperatingUnitsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorporateOperatingUnits** | Pointer to [**[]CorporateOperatingUnitType**](CorporateOperatingUnitType.md) | List of Corporate Operating Units. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCorporateOperatingUnitsCriteria

`func NewCorporateOperatingUnitsCriteria() *CorporateOperatingUnitsCriteria`

NewCorporateOperatingUnitsCriteria instantiates a new CorporateOperatingUnitsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorporateOperatingUnitsCriteriaWithDefaults

`func NewCorporateOperatingUnitsCriteriaWithDefaults() *CorporateOperatingUnitsCriteria`

NewCorporateOperatingUnitsCriteriaWithDefaults instantiates a new CorporateOperatingUnitsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorporateOperatingUnits

`func (o *CorporateOperatingUnitsCriteria) GetCorporateOperatingUnits() []CorporateOperatingUnitType`

GetCorporateOperatingUnits returns the CorporateOperatingUnits field if non-nil, zero value otherwise.

### GetCorporateOperatingUnitsOk

`func (o *CorporateOperatingUnitsCriteria) GetCorporateOperatingUnitsOk() (*[]CorporateOperatingUnitType, bool)`

GetCorporateOperatingUnitsOk returns a tuple with the CorporateOperatingUnits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorporateOperatingUnits

`func (o *CorporateOperatingUnitsCriteria) SetCorporateOperatingUnits(v []CorporateOperatingUnitType)`

SetCorporateOperatingUnits sets CorporateOperatingUnits field to given value.

### HasCorporateOperatingUnits

`func (o *CorporateOperatingUnitsCriteria) HasCorporateOperatingUnits() bool`

HasCorporateOperatingUnits returns a boolean if a field has been set.

### GetLinks

`func (o *CorporateOperatingUnitsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CorporateOperatingUnitsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CorporateOperatingUnitsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CorporateOperatingUnitsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CorporateOperatingUnitsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CorporateOperatingUnitsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CorporateOperatingUnitsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CorporateOperatingUnitsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


