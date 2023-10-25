# PostCommunicationMethodsEntDetailsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommunicationMethodsEntDetails** | Pointer to [**[]CommunicationMethodsEntDetailType**](CommunicationMethodsEntDetailType.md) | List of Communication Methods Ent Details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCommunicationMethodsEntDetailsRequest

`func NewPostCommunicationMethodsEntDetailsRequest() *PostCommunicationMethodsEntDetailsRequest`

NewPostCommunicationMethodsEntDetailsRequest instantiates a new PostCommunicationMethodsEntDetailsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCommunicationMethodsEntDetailsRequestWithDefaults

`func NewPostCommunicationMethodsEntDetailsRequestWithDefaults() *PostCommunicationMethodsEntDetailsRequest`

NewPostCommunicationMethodsEntDetailsRequestWithDefaults instantiates a new PostCommunicationMethodsEntDetailsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommunicationMethodsEntDetails

`func (o *PostCommunicationMethodsEntDetailsRequest) GetCommunicationMethodsEntDetails() []CommunicationMethodsEntDetailType`

GetCommunicationMethodsEntDetails returns the CommunicationMethodsEntDetails field if non-nil, zero value otherwise.

### GetCommunicationMethodsEntDetailsOk

`func (o *PostCommunicationMethodsEntDetailsRequest) GetCommunicationMethodsEntDetailsOk() (*[]CommunicationMethodsEntDetailType, bool)`

GetCommunicationMethodsEntDetailsOk returns a tuple with the CommunicationMethodsEntDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationMethodsEntDetails

`func (o *PostCommunicationMethodsEntDetailsRequest) SetCommunicationMethodsEntDetails(v []CommunicationMethodsEntDetailType)`

SetCommunicationMethodsEntDetails sets CommunicationMethodsEntDetails field to given value.

### HasCommunicationMethodsEntDetails

`func (o *PostCommunicationMethodsEntDetailsRequest) HasCommunicationMethodsEntDetails() bool`

HasCommunicationMethodsEntDetails returns a boolean if a field has been set.

### GetLinks

`func (o *PostCommunicationMethodsEntDetailsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCommunicationMethodsEntDetailsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCommunicationMethodsEntDetailsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCommunicationMethodsEntDetailsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCommunicationMethodsEntDetailsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCommunicationMethodsEntDetailsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCommunicationMethodsEntDetailsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCommunicationMethodsEntDetailsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


