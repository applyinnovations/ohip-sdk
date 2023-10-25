# PutProfileNameValidationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ProfileNames** | Pointer to [**ProfileNameValidationEditType**](ProfileNameValidationEditType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutProfileNameValidationsRequest

`func NewPutProfileNameValidationsRequest() *PutProfileNameValidationsRequest`

NewPutProfileNameValidationsRequest instantiates a new PutProfileNameValidationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutProfileNameValidationsRequestWithDefaults

`func NewPutProfileNameValidationsRequestWithDefaults() *PutProfileNameValidationsRequest`

NewPutProfileNameValidationsRequestWithDefaults instantiates a new PutProfileNameValidationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutProfileNameValidationsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutProfileNameValidationsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutProfileNameValidationsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutProfileNameValidationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProfileNames

`func (o *PutProfileNameValidationsRequest) GetProfileNames() ProfileNameValidationEditType`

GetProfileNames returns the ProfileNames field if non-nil, zero value otherwise.

### GetProfileNamesOk

`func (o *PutProfileNameValidationsRequest) GetProfileNamesOk() (*ProfileNameValidationEditType, bool)`

GetProfileNamesOk returns a tuple with the ProfileNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileNames

`func (o *PutProfileNameValidationsRequest) SetProfileNames(v ProfileNameValidationEditType)`

SetProfileNames sets ProfileNames field to given value.

### HasProfileNames

`func (o *PutProfileNameValidationsRequest) HasProfileNames() bool`

HasProfileNames returns a boolean if a field has been set.

### GetWarnings

`func (o *PutProfileNameValidationsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutProfileNameValidationsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutProfileNameValidationsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutProfileNameValidationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


