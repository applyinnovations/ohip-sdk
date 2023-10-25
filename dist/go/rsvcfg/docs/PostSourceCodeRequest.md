# PostSourceCodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SourceCode** | Pointer to [**SourceCodeType**](SourceCodeType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostSourceCodeRequest

`func NewPostSourceCodeRequest() *PostSourceCodeRequest`

NewPostSourceCodeRequest instantiates a new PostSourceCodeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostSourceCodeRequestWithDefaults

`func NewPostSourceCodeRequestWithDefaults() *PostSourceCodeRequest`

NewPostSourceCodeRequestWithDefaults instantiates a new PostSourceCodeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostSourceCodeRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostSourceCodeRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostSourceCodeRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostSourceCodeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSourceCode

`func (o *PostSourceCodeRequest) GetSourceCode() SourceCodeType`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *PostSourceCodeRequest) GetSourceCodeOk() (*SourceCodeType, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *PostSourceCodeRequest) SetSourceCode(v SourceCodeType)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *PostSourceCodeRequest) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetWarnings

`func (o *PostSourceCodeRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostSourceCodeRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostSourceCodeRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostSourceCodeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


