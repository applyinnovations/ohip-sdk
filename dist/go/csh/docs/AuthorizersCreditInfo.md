# AuthorizersCreditInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizersCreditType** | Pointer to [**[]AuthorizerCreditType**](AuthorizerCreditType.md) | List of Comp Accounting Authorizers Credits | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAuthorizersCreditInfo

`func NewAuthorizersCreditInfo() *AuthorizersCreditInfo`

NewAuthorizersCreditInfo instantiates a new AuthorizersCreditInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizersCreditInfoWithDefaults

`func NewAuthorizersCreditInfoWithDefaults() *AuthorizersCreditInfo`

NewAuthorizersCreditInfoWithDefaults instantiates a new AuthorizersCreditInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizersCreditType

`func (o *AuthorizersCreditInfo) GetAuthorizersCreditType() []AuthorizerCreditType`

GetAuthorizersCreditType returns the AuthorizersCreditType field if non-nil, zero value otherwise.

### GetAuthorizersCreditTypeOk

`func (o *AuthorizersCreditInfo) GetAuthorizersCreditTypeOk() (*[]AuthorizerCreditType, bool)`

GetAuthorizersCreditTypeOk returns a tuple with the AuthorizersCreditType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizersCreditType

`func (o *AuthorizersCreditInfo) SetAuthorizersCreditType(v []AuthorizerCreditType)`

SetAuthorizersCreditType sets AuthorizersCreditType field to given value.

### HasAuthorizersCreditType

`func (o *AuthorizersCreditInfo) HasAuthorizersCreditType() bool`

HasAuthorizersCreditType returns a boolean if a field has been set.

### GetLinks

`func (o *AuthorizersCreditInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AuthorizersCreditInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AuthorizersCreditInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AuthorizersCreditInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AuthorizersCreditInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AuthorizersCreditInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AuthorizersCreditInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AuthorizersCreditInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


