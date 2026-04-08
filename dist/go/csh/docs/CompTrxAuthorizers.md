# CompTrxAuthorizers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizerInfo** | Pointer to [**[]AuthorizerInfoType**](AuthorizerInfoType.md) | List of authorizers eligible to perform the transfer. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCompTrxAuthorizers

`func NewCompTrxAuthorizers() *CompTrxAuthorizers`

NewCompTrxAuthorizers instantiates a new CompTrxAuthorizers object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompTrxAuthorizersWithDefaults

`func NewCompTrxAuthorizersWithDefaults() *CompTrxAuthorizers`

NewCompTrxAuthorizersWithDefaults instantiates a new CompTrxAuthorizers object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizerInfo

`func (o *CompTrxAuthorizers) GetAuthorizerInfo() []AuthorizerInfoType`

GetAuthorizerInfo returns the AuthorizerInfo field if non-nil, zero value otherwise.

### GetAuthorizerInfoOk

`func (o *CompTrxAuthorizers) GetAuthorizerInfoOk() (*[]AuthorizerInfoType, bool)`

GetAuthorizerInfoOk returns a tuple with the AuthorizerInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerInfo

`func (o *CompTrxAuthorizers) SetAuthorizerInfo(v []AuthorizerInfoType)`

SetAuthorizerInfo sets AuthorizerInfo field to given value.

### HasAuthorizerInfo

`func (o *CompTrxAuthorizers) HasAuthorizerInfo() bool`

HasAuthorizerInfo returns a boolean if a field has been set.

### GetLinks

`func (o *CompTrxAuthorizers) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CompTrxAuthorizers) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CompTrxAuthorizers) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CompTrxAuthorizers) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CompTrxAuthorizers) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CompTrxAuthorizers) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CompTrxAuthorizers) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CompTrxAuthorizers) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


