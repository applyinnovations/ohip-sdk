# CompAuthorizers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompAuthorizerInfo** | Pointer to [**[]CompAuthorizerType**](CompAuthorizerType.md) | Information associated for an authorizer. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCompAuthorizers

`func NewCompAuthorizers() *CompAuthorizers`

NewCompAuthorizers instantiates a new CompAuthorizers object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompAuthorizersWithDefaults

`func NewCompAuthorizersWithDefaults() *CompAuthorizers`

NewCompAuthorizersWithDefaults instantiates a new CompAuthorizers object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompAuthorizerInfo

`func (o *CompAuthorizers) GetCompAuthorizerInfo() []CompAuthorizerType`

GetCompAuthorizerInfo returns the CompAuthorizerInfo field if non-nil, zero value otherwise.

### GetCompAuthorizerInfoOk

`func (o *CompAuthorizers) GetCompAuthorizerInfoOk() (*[]CompAuthorizerType, bool)`

GetCompAuthorizerInfoOk returns a tuple with the CompAuthorizerInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompAuthorizerInfo

`func (o *CompAuthorizers) SetCompAuthorizerInfo(v []CompAuthorizerType)`

SetCompAuthorizerInfo sets CompAuthorizerInfo field to given value.

### HasCompAuthorizerInfo

`func (o *CompAuthorizers) HasCompAuthorizerInfo() bool`

HasCompAuthorizerInfo returns a boolean if a field has been set.

### GetLinks

`func (o *CompAuthorizers) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CompAuthorizers) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CompAuthorizers) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CompAuthorizers) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CompAuthorizers) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CompAuthorizers) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CompAuthorizers) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CompAuthorizers) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


