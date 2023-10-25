# PostFunctionSpaceSetupStylesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SetupStyles** | Pointer to [**[]FunctionSpaceSetupStyleType**](FunctionSpaceSetupStyleType.md) | List of the function space setup styles to be configured or fetched | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostFunctionSpaceSetupStylesRequest

`func NewPostFunctionSpaceSetupStylesRequest() *PostFunctionSpaceSetupStylesRequest`

NewPostFunctionSpaceSetupStylesRequest instantiates a new PostFunctionSpaceSetupStylesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostFunctionSpaceSetupStylesRequestWithDefaults

`func NewPostFunctionSpaceSetupStylesRequestWithDefaults() *PostFunctionSpaceSetupStylesRequest`

NewPostFunctionSpaceSetupStylesRequestWithDefaults instantiates a new PostFunctionSpaceSetupStylesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostFunctionSpaceSetupStylesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostFunctionSpaceSetupStylesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostFunctionSpaceSetupStylesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostFunctionSpaceSetupStylesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSetupStyles

`func (o *PostFunctionSpaceSetupStylesRequest) GetSetupStyles() []FunctionSpaceSetupStyleType`

GetSetupStyles returns the SetupStyles field if non-nil, zero value otherwise.

### GetSetupStylesOk

`func (o *PostFunctionSpaceSetupStylesRequest) GetSetupStylesOk() (*[]FunctionSpaceSetupStyleType, bool)`

GetSetupStylesOk returns a tuple with the SetupStyles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupStyles

`func (o *PostFunctionSpaceSetupStylesRequest) SetSetupStyles(v []FunctionSpaceSetupStyleType)`

SetSetupStyles sets SetupStyles field to given value.

### HasSetupStyles

`func (o *PostFunctionSpaceSetupStylesRequest) HasSetupStyles() bool`

HasSetupStyles returns a boolean if a field has been set.

### GetWarnings

`func (o *PostFunctionSpaceSetupStylesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostFunctionSpaceSetupStylesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostFunctionSpaceSetupStylesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostFunctionSpaceSetupStylesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


