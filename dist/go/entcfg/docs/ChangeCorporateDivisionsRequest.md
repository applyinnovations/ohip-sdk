# ChangeCorporateDivisionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorporateDivisions** | Pointer to [**[]CorporateDivisionType**](CorporateDivisionType.md) | List of Corporate Divisions. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeCorporateDivisionsRequest

`func NewChangeCorporateDivisionsRequest() *ChangeCorporateDivisionsRequest`

NewChangeCorporateDivisionsRequest instantiates a new ChangeCorporateDivisionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeCorporateDivisionsRequestWithDefaults

`func NewChangeCorporateDivisionsRequestWithDefaults() *ChangeCorporateDivisionsRequest`

NewChangeCorporateDivisionsRequestWithDefaults instantiates a new ChangeCorporateDivisionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorporateDivisions

`func (o *ChangeCorporateDivisionsRequest) GetCorporateDivisions() []CorporateDivisionType`

GetCorporateDivisions returns the CorporateDivisions field if non-nil, zero value otherwise.

### GetCorporateDivisionsOk

`func (o *ChangeCorporateDivisionsRequest) GetCorporateDivisionsOk() (*[]CorporateDivisionType, bool)`

GetCorporateDivisionsOk returns a tuple with the CorporateDivisions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorporateDivisions

`func (o *ChangeCorporateDivisionsRequest) SetCorporateDivisions(v []CorporateDivisionType)`

SetCorporateDivisions sets CorporateDivisions field to given value.

### HasCorporateDivisions

`func (o *ChangeCorporateDivisionsRequest) HasCorporateDivisions() bool`

HasCorporateDivisions returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeCorporateDivisionsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeCorporateDivisionsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeCorporateDivisionsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeCorporateDivisionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeCorporateDivisionsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeCorporateDivisionsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeCorporateDivisionsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeCorporateDivisionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


