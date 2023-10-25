# PostCorporateBusinessUnitsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorporateBusinessUnits** | Pointer to [**[]CorporateBusinessUnitType**](CorporateBusinessUnitType.md) | List of Corporate Business Units. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCorporateBusinessUnitsRequest

`func NewPostCorporateBusinessUnitsRequest() *PostCorporateBusinessUnitsRequest`

NewPostCorporateBusinessUnitsRequest instantiates a new PostCorporateBusinessUnitsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCorporateBusinessUnitsRequestWithDefaults

`func NewPostCorporateBusinessUnitsRequestWithDefaults() *PostCorporateBusinessUnitsRequest`

NewPostCorporateBusinessUnitsRequestWithDefaults instantiates a new PostCorporateBusinessUnitsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorporateBusinessUnits

`func (o *PostCorporateBusinessUnitsRequest) GetCorporateBusinessUnits() []CorporateBusinessUnitType`

GetCorporateBusinessUnits returns the CorporateBusinessUnits field if non-nil, zero value otherwise.

### GetCorporateBusinessUnitsOk

`func (o *PostCorporateBusinessUnitsRequest) GetCorporateBusinessUnitsOk() (*[]CorporateBusinessUnitType, bool)`

GetCorporateBusinessUnitsOk returns a tuple with the CorporateBusinessUnits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorporateBusinessUnits

`func (o *PostCorporateBusinessUnitsRequest) SetCorporateBusinessUnits(v []CorporateBusinessUnitType)`

SetCorporateBusinessUnits sets CorporateBusinessUnits field to given value.

### HasCorporateBusinessUnits

`func (o *PostCorporateBusinessUnitsRequest) HasCorporateBusinessUnits() bool`

HasCorporateBusinessUnits returns a boolean if a field has been set.

### GetLinks

`func (o *PostCorporateBusinessUnitsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCorporateBusinessUnitsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCorporateBusinessUnitsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCorporateBusinessUnitsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCorporateBusinessUnitsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCorporateBusinessUnitsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCorporateBusinessUnitsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCorporateBusinessUnitsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


