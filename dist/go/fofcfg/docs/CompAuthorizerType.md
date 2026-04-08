# CompAuthorizerType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code. | [optional] 
**AuthorizerId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Authorizer** | Pointer to **string** | Name for the authorizer. | [optional] 
**AuthorizerDisplayName** | Pointer to **string** | Display name for the authorizer. | [optional] 
**LastName** | Pointer to **string** | Last name for the authorizer. | [optional] 
**FirstName** | Pointer to **string** | First name for the authorizer. | [optional] 
**Name** | Pointer to **string** | Full name of the authorizer. | [optional] 
**TotalCreditLimit** | Pointer to **int32** | Credit limit associated for the authorizer. | [optional] 
**ARAccount** | Pointer to [**ARAccountType**](ARAccountType.md) |  | [optional] 
**CompAuthorizerHeaders** | Pointer to [**[]CompAuthorizerHeaderType**](CompAuthorizerHeaderType.md) | Comp authorizer details information. | [optional] 
**Inactive** | Pointer to **bool** | Indicator that tells whether the authorizer is active or not. | [optional] 
**OverrideWarning** | Pointer to **bool** | Indicator that tells whether to override warnings when deactivating authorizer. | [optional] 

## Methods

### NewCompAuthorizerType

`func NewCompAuthorizerType() *CompAuthorizerType`

NewCompAuthorizerType instantiates a new CompAuthorizerType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompAuthorizerTypeWithDefaults

`func NewCompAuthorizerTypeWithDefaults() *CompAuthorizerType`

NewCompAuthorizerTypeWithDefaults instantiates a new CompAuthorizerType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CompAuthorizerType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CompAuthorizerType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CompAuthorizerType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CompAuthorizerType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetAuthorizerId

`func (o *CompAuthorizerType) GetAuthorizerId() UniqueIDType`

GetAuthorizerId returns the AuthorizerId field if non-nil, zero value otherwise.

### GetAuthorizerIdOk

`func (o *CompAuthorizerType) GetAuthorizerIdOk() (*UniqueIDType, bool)`

GetAuthorizerIdOk returns a tuple with the AuthorizerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerId

`func (o *CompAuthorizerType) SetAuthorizerId(v UniqueIDType)`

SetAuthorizerId sets AuthorizerId field to given value.

### HasAuthorizerId

`func (o *CompAuthorizerType) HasAuthorizerId() bool`

HasAuthorizerId returns a boolean if a field has been set.

### GetProfileId

`func (o *CompAuthorizerType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *CompAuthorizerType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *CompAuthorizerType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *CompAuthorizerType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetAuthorizer

`func (o *CompAuthorizerType) GetAuthorizer() string`

GetAuthorizer returns the Authorizer field if non-nil, zero value otherwise.

### GetAuthorizerOk

`func (o *CompAuthorizerType) GetAuthorizerOk() (*string, bool)`

GetAuthorizerOk returns a tuple with the Authorizer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizer

`func (o *CompAuthorizerType) SetAuthorizer(v string)`

SetAuthorizer sets Authorizer field to given value.

### HasAuthorizer

`func (o *CompAuthorizerType) HasAuthorizer() bool`

HasAuthorizer returns a boolean if a field has been set.

### GetAuthorizerDisplayName

`func (o *CompAuthorizerType) GetAuthorizerDisplayName() string`

GetAuthorizerDisplayName returns the AuthorizerDisplayName field if non-nil, zero value otherwise.

### GetAuthorizerDisplayNameOk

`func (o *CompAuthorizerType) GetAuthorizerDisplayNameOk() (*string, bool)`

GetAuthorizerDisplayNameOk returns a tuple with the AuthorizerDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerDisplayName

`func (o *CompAuthorizerType) SetAuthorizerDisplayName(v string)`

SetAuthorizerDisplayName sets AuthorizerDisplayName field to given value.

### HasAuthorizerDisplayName

`func (o *CompAuthorizerType) HasAuthorizerDisplayName() bool`

HasAuthorizerDisplayName returns a boolean if a field has been set.

### GetLastName

`func (o *CompAuthorizerType) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *CompAuthorizerType) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *CompAuthorizerType) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *CompAuthorizerType) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetFirstName

`func (o *CompAuthorizerType) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *CompAuthorizerType) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *CompAuthorizerType) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *CompAuthorizerType) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetName

`func (o *CompAuthorizerType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CompAuthorizerType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CompAuthorizerType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CompAuthorizerType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTotalCreditLimit

`func (o *CompAuthorizerType) GetTotalCreditLimit() int32`

GetTotalCreditLimit returns the TotalCreditLimit field if non-nil, zero value otherwise.

### GetTotalCreditLimitOk

`func (o *CompAuthorizerType) GetTotalCreditLimitOk() (*int32, bool)`

GetTotalCreditLimitOk returns a tuple with the TotalCreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCreditLimit

`func (o *CompAuthorizerType) SetTotalCreditLimit(v int32)`

SetTotalCreditLimit sets TotalCreditLimit field to given value.

### HasTotalCreditLimit

`func (o *CompAuthorizerType) HasTotalCreditLimit() bool`

HasTotalCreditLimit returns a boolean if a field has been set.

### GetARAccount

`func (o *CompAuthorizerType) GetARAccount() ARAccountType`

GetARAccount returns the ARAccount field if non-nil, zero value otherwise.

### GetARAccountOk

`func (o *CompAuthorizerType) GetARAccountOk() (*ARAccountType, bool)`

GetARAccountOk returns a tuple with the ARAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARAccount

`func (o *CompAuthorizerType) SetARAccount(v ARAccountType)`

SetARAccount sets ARAccount field to given value.

### HasARAccount

`func (o *CompAuthorizerType) HasARAccount() bool`

HasARAccount returns a boolean if a field has been set.

### GetCompAuthorizerHeaders

`func (o *CompAuthorizerType) GetCompAuthorizerHeaders() []CompAuthorizerHeaderType`

GetCompAuthorizerHeaders returns the CompAuthorizerHeaders field if non-nil, zero value otherwise.

### GetCompAuthorizerHeadersOk

`func (o *CompAuthorizerType) GetCompAuthorizerHeadersOk() (*[]CompAuthorizerHeaderType, bool)`

GetCompAuthorizerHeadersOk returns a tuple with the CompAuthorizerHeaders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompAuthorizerHeaders

`func (o *CompAuthorizerType) SetCompAuthorizerHeaders(v []CompAuthorizerHeaderType)`

SetCompAuthorizerHeaders sets CompAuthorizerHeaders field to given value.

### HasCompAuthorizerHeaders

`func (o *CompAuthorizerType) HasCompAuthorizerHeaders() bool`

HasCompAuthorizerHeaders returns a boolean if a field has been set.

### GetInactive

`func (o *CompAuthorizerType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *CompAuthorizerType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *CompAuthorizerType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *CompAuthorizerType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetOverrideWarning

`func (o *CompAuthorizerType) GetOverrideWarning() bool`

GetOverrideWarning returns the OverrideWarning field if non-nil, zero value otherwise.

### GetOverrideWarningOk

`func (o *CompAuthorizerType) GetOverrideWarningOk() (*bool, bool)`

GetOverrideWarningOk returns a tuple with the OverrideWarning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideWarning

`func (o *CompAuthorizerType) SetOverrideWarning(v bool)`

SetOverrideWarning sets OverrideWarning field to given value.

### HasOverrideWarning

`func (o *CompAuthorizerType) HasOverrideWarning() bool`

HasOverrideWarning returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


