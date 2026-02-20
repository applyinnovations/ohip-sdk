# AuthorizerInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizerId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AuthorizerUserName** | Pointer to **string** | Application user name of the authorizer | [optional] 
**AuthorizerName** | Pointer to **string** | Full name of the authorizer. | [optional] 
**AuthorizerRateCode** | Pointer to **string** | Rate code of the authorizer. | [optional] 
**InheritAuthorizerRateCode** | Pointer to **bool** | Indicates whether user has the choice to have reservation inherit rate code from the authorizer. | [optional] 

## Methods

### NewAuthorizerInfoType

`func NewAuthorizerInfoType() *AuthorizerInfoType`

NewAuthorizerInfoType instantiates a new AuthorizerInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizerInfoTypeWithDefaults

`func NewAuthorizerInfoTypeWithDefaults() *AuthorizerInfoType`

NewAuthorizerInfoTypeWithDefaults instantiates a new AuthorizerInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizerId

`func (o *AuthorizerInfoType) GetAuthorizerId() UniqueIDType`

GetAuthorizerId returns the AuthorizerId field if non-nil, zero value otherwise.

### GetAuthorizerIdOk

`func (o *AuthorizerInfoType) GetAuthorizerIdOk() (*UniqueIDType, bool)`

GetAuthorizerIdOk returns a tuple with the AuthorizerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerId

`func (o *AuthorizerInfoType) SetAuthorizerId(v UniqueIDType)`

SetAuthorizerId sets AuthorizerId field to given value.

### HasAuthorizerId

`func (o *AuthorizerInfoType) HasAuthorizerId() bool`

HasAuthorizerId returns a boolean if a field has been set.

### GetAuthorizerUserName

`func (o *AuthorizerInfoType) GetAuthorizerUserName() string`

GetAuthorizerUserName returns the AuthorizerUserName field if non-nil, zero value otherwise.

### GetAuthorizerUserNameOk

`func (o *AuthorizerInfoType) GetAuthorizerUserNameOk() (*string, bool)`

GetAuthorizerUserNameOk returns a tuple with the AuthorizerUserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerUserName

`func (o *AuthorizerInfoType) SetAuthorizerUserName(v string)`

SetAuthorizerUserName sets AuthorizerUserName field to given value.

### HasAuthorizerUserName

`func (o *AuthorizerInfoType) HasAuthorizerUserName() bool`

HasAuthorizerUserName returns a boolean if a field has been set.

### GetAuthorizerName

`func (o *AuthorizerInfoType) GetAuthorizerName() string`

GetAuthorizerName returns the AuthorizerName field if non-nil, zero value otherwise.

### GetAuthorizerNameOk

`func (o *AuthorizerInfoType) GetAuthorizerNameOk() (*string, bool)`

GetAuthorizerNameOk returns a tuple with the AuthorizerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerName

`func (o *AuthorizerInfoType) SetAuthorizerName(v string)`

SetAuthorizerName sets AuthorizerName field to given value.

### HasAuthorizerName

`func (o *AuthorizerInfoType) HasAuthorizerName() bool`

HasAuthorizerName returns a boolean if a field has been set.

### GetAuthorizerRateCode

`func (o *AuthorizerInfoType) GetAuthorizerRateCode() string`

GetAuthorizerRateCode returns the AuthorizerRateCode field if non-nil, zero value otherwise.

### GetAuthorizerRateCodeOk

`func (o *AuthorizerInfoType) GetAuthorizerRateCodeOk() (*string, bool)`

GetAuthorizerRateCodeOk returns a tuple with the AuthorizerRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerRateCode

`func (o *AuthorizerInfoType) SetAuthorizerRateCode(v string)`

SetAuthorizerRateCode sets AuthorizerRateCode field to given value.

### HasAuthorizerRateCode

`func (o *AuthorizerInfoType) HasAuthorizerRateCode() bool`

HasAuthorizerRateCode returns a boolean if a field has been set.

### GetInheritAuthorizerRateCode

`func (o *AuthorizerInfoType) GetInheritAuthorizerRateCode() bool`

GetInheritAuthorizerRateCode returns the InheritAuthorizerRateCode field if non-nil, zero value otherwise.

### GetInheritAuthorizerRateCodeOk

`func (o *AuthorizerInfoType) GetInheritAuthorizerRateCodeOk() (*bool, bool)`

GetInheritAuthorizerRateCodeOk returns a tuple with the InheritAuthorizerRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInheritAuthorizerRateCode

`func (o *AuthorizerInfoType) SetInheritAuthorizerRateCode(v bool)`

SetInheritAuthorizerRateCode sets InheritAuthorizerRateCode field to given value.

### HasInheritAuthorizerRateCode

`func (o *AuthorizerInfoType) HasInheritAuthorizerRateCode() bool`

HasInheritAuthorizerRateCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


