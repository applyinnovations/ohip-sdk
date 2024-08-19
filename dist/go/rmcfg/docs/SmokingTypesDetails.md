# SmokingTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SmokingTypes** | Pointer to [**[]SmokingTypeType**](SmokingTypeType.md) | List of Smoking Types. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSmokingTypesDetails

`func NewSmokingTypesDetails() *SmokingTypesDetails`

NewSmokingTypesDetails instantiates a new SmokingTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSmokingTypesDetailsWithDefaults

`func NewSmokingTypesDetailsWithDefaults() *SmokingTypesDetails`

NewSmokingTypesDetailsWithDefaults instantiates a new SmokingTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *SmokingTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SmokingTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SmokingTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SmokingTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSmokingTypes

`func (o *SmokingTypesDetails) GetSmokingTypes() []SmokingTypeType`

GetSmokingTypes returns the SmokingTypes field if non-nil, zero value otherwise.

### GetSmokingTypesOk

`func (o *SmokingTypesDetails) GetSmokingTypesOk() (*[]SmokingTypeType, bool)`

GetSmokingTypesOk returns a tuple with the SmokingTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingTypes

`func (o *SmokingTypesDetails) SetSmokingTypes(v []SmokingTypeType)`

SetSmokingTypes sets SmokingTypes field to given value.

### HasSmokingTypes

`func (o *SmokingTypesDetails) HasSmokingTypes() bool`

HasSmokingTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *SmokingTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SmokingTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SmokingTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SmokingTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


