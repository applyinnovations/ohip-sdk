# CorporateBusinessUnitsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorporateBusinessUnits** | Pointer to [**[]CorporateBusinessUnitType**](CorporateBusinessUnitType.md) | List of Corporate Business Units. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCorporateBusinessUnitsToBeChanged

`func NewCorporateBusinessUnitsToBeChanged() *CorporateBusinessUnitsToBeChanged`

NewCorporateBusinessUnitsToBeChanged instantiates a new CorporateBusinessUnitsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorporateBusinessUnitsToBeChangedWithDefaults

`func NewCorporateBusinessUnitsToBeChangedWithDefaults() *CorporateBusinessUnitsToBeChanged`

NewCorporateBusinessUnitsToBeChangedWithDefaults instantiates a new CorporateBusinessUnitsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorporateBusinessUnits

`func (o *CorporateBusinessUnitsToBeChanged) GetCorporateBusinessUnits() []CorporateBusinessUnitType`

GetCorporateBusinessUnits returns the CorporateBusinessUnits field if non-nil, zero value otherwise.

### GetCorporateBusinessUnitsOk

`func (o *CorporateBusinessUnitsToBeChanged) GetCorporateBusinessUnitsOk() (*[]CorporateBusinessUnitType, bool)`

GetCorporateBusinessUnitsOk returns a tuple with the CorporateBusinessUnits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorporateBusinessUnits

`func (o *CorporateBusinessUnitsToBeChanged) SetCorporateBusinessUnits(v []CorporateBusinessUnitType)`

SetCorporateBusinessUnits sets CorporateBusinessUnits field to given value.

### HasCorporateBusinessUnits

`func (o *CorporateBusinessUnitsToBeChanged) HasCorporateBusinessUnits() bool`

HasCorporateBusinessUnits returns a boolean if a field has been set.

### GetLinks

`func (o *CorporateBusinessUnitsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CorporateBusinessUnitsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CorporateBusinessUnitsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CorporateBusinessUnitsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CorporateBusinessUnitsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CorporateBusinessUnitsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CorporateBusinessUnitsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CorporateBusinessUnitsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

