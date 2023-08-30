# PostPropertyTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PropertyTypes** | Pointer to [**[]PropertyTypeType**](PropertyTypeType.md) | List of Property Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostPropertyTypesRequest

`func NewPostPropertyTypesRequest() *PostPropertyTypesRequest`

NewPostPropertyTypesRequest instantiates a new PostPropertyTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostPropertyTypesRequestWithDefaults

`func NewPostPropertyTypesRequestWithDefaults() *PostPropertyTypesRequest`

NewPostPropertyTypesRequestWithDefaults instantiates a new PostPropertyTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPropertyTypes

`func (o *PostPropertyTypesRequest) GetPropertyTypes() []PropertyTypeType`

GetPropertyTypes returns the PropertyTypes field if non-nil, zero value otherwise.

### GetPropertyTypesOk

`func (o *PostPropertyTypesRequest) GetPropertyTypesOk() (*[]PropertyTypeType, bool)`

GetPropertyTypesOk returns a tuple with the PropertyTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyTypes

`func (o *PostPropertyTypesRequest) SetPropertyTypes(v []PropertyTypeType)`

SetPropertyTypes sets PropertyTypes field to given value.

### HasPropertyTypes

`func (o *PostPropertyTypesRequest) HasPropertyTypes() bool`

HasPropertyTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PostPropertyTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostPropertyTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostPropertyTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostPropertyTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostPropertyTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostPropertyTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostPropertyTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostPropertyTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


