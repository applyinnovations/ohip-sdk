# PostIdentificationTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentificationTypes** | Pointer to [**[]IdentificationTypeType**](IdentificationTypeType.md) | List of Identification Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostIdentificationTypesRequest

`func NewPostIdentificationTypesRequest() *PostIdentificationTypesRequest`

NewPostIdentificationTypesRequest instantiates a new PostIdentificationTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostIdentificationTypesRequestWithDefaults

`func NewPostIdentificationTypesRequestWithDefaults() *PostIdentificationTypesRequest`

NewPostIdentificationTypesRequestWithDefaults instantiates a new PostIdentificationTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentificationTypes

`func (o *PostIdentificationTypesRequest) GetIdentificationTypes() []IdentificationTypeType`

GetIdentificationTypes returns the IdentificationTypes field if non-nil, zero value otherwise.

### GetIdentificationTypesOk

`func (o *PostIdentificationTypesRequest) GetIdentificationTypesOk() (*[]IdentificationTypeType, bool)`

GetIdentificationTypesOk returns a tuple with the IdentificationTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentificationTypes

`func (o *PostIdentificationTypesRequest) SetIdentificationTypes(v []IdentificationTypeType)`

SetIdentificationTypes sets IdentificationTypes field to given value.

### HasIdentificationTypes

`func (o *PostIdentificationTypesRequest) HasIdentificationTypes() bool`

HasIdentificationTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PostIdentificationTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostIdentificationTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostIdentificationTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostIdentificationTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostIdentificationTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostIdentificationTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostIdentificationTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostIdentificationTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


