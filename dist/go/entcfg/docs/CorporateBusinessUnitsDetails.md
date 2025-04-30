# CorporateBusinessUnitsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorporateBusinessUnits** | Pointer to [**[]CorporateBusinessUnitType**](CorporateBusinessUnitType.md) | List of Corporate Business Units. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCorporateBusinessUnitsDetails

`func NewCorporateBusinessUnitsDetails() *CorporateBusinessUnitsDetails`

NewCorporateBusinessUnitsDetails instantiates a new CorporateBusinessUnitsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorporateBusinessUnitsDetailsWithDefaults

`func NewCorporateBusinessUnitsDetailsWithDefaults() *CorporateBusinessUnitsDetails`

NewCorporateBusinessUnitsDetailsWithDefaults instantiates a new CorporateBusinessUnitsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorporateBusinessUnits

`func (o *CorporateBusinessUnitsDetails) GetCorporateBusinessUnits() []CorporateBusinessUnitType`

GetCorporateBusinessUnits returns the CorporateBusinessUnits field if non-nil, zero value otherwise.

### GetCorporateBusinessUnitsOk

`func (o *CorporateBusinessUnitsDetails) GetCorporateBusinessUnitsOk() (*[]CorporateBusinessUnitType, bool)`

GetCorporateBusinessUnitsOk returns a tuple with the CorporateBusinessUnits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorporateBusinessUnits

`func (o *CorporateBusinessUnitsDetails) SetCorporateBusinessUnits(v []CorporateBusinessUnitType)`

SetCorporateBusinessUnits sets CorporateBusinessUnits field to given value.

### HasCorporateBusinessUnits

`func (o *CorporateBusinessUnitsDetails) HasCorporateBusinessUnits() bool`

HasCorporateBusinessUnits returns a boolean if a field has been set.

### GetLinks

`func (o *CorporateBusinessUnitsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CorporateBusinessUnitsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CorporateBusinessUnitsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CorporateBusinessUnitsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CorporateBusinessUnitsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CorporateBusinessUnitsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CorporateBusinessUnitsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CorporateBusinessUnitsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


