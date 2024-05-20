# ResCompAccountingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Authorizer** | Pointer to **string** | ID of the employee who will act as the host for this guest. | [optional] 
**CompPostings** | Pointer to **string** | Indicates if the Comp Billing/posting Exist | [optional] 
**CompType** | Pointer to **string** | Code used to identify the casino comp type and ranking of a guest. | [optional] 

## Methods

### NewResCompAccountingType

`func NewResCompAccountingType() *ResCompAccountingType`

NewResCompAccountingType instantiates a new ResCompAccountingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResCompAccountingTypeWithDefaults

`func NewResCompAccountingTypeWithDefaults() *ResCompAccountingType`

NewResCompAccountingTypeWithDefaults instantiates a new ResCompAccountingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizer

`func (o *ResCompAccountingType) GetAuthorizer() string`

GetAuthorizer returns the Authorizer field if non-nil, zero value otherwise.

### GetAuthorizerOk

`func (o *ResCompAccountingType) GetAuthorizerOk() (*string, bool)`

GetAuthorizerOk returns a tuple with the Authorizer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizer

`func (o *ResCompAccountingType) SetAuthorizer(v string)`

SetAuthorizer sets Authorizer field to given value.

### HasAuthorizer

`func (o *ResCompAccountingType) HasAuthorizer() bool`

HasAuthorizer returns a boolean if a field has been set.

### GetCompPostings

`func (o *ResCompAccountingType) GetCompPostings() string`

GetCompPostings returns the CompPostings field if non-nil, zero value otherwise.

### GetCompPostingsOk

`func (o *ResCompAccountingType) GetCompPostingsOk() (*string, bool)`

GetCompPostingsOk returns a tuple with the CompPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompPostings

`func (o *ResCompAccountingType) SetCompPostings(v string)`

SetCompPostings sets CompPostings field to given value.

### HasCompPostings

`func (o *ResCompAccountingType) HasCompPostings() bool`

HasCompPostings returns a boolean if a field has been set.

### GetCompType

`func (o *ResCompAccountingType) GetCompType() string`

GetCompType returns the CompType field if non-nil, zero value otherwise.

### GetCompTypeOk

`func (o *ResCompAccountingType) GetCompTypeOk() (*string, bool)`

GetCompTypeOk returns a tuple with the CompType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompType

`func (o *ResCompAccountingType) SetCompType(v string)`

SetCompType sets CompType field to given value.

### HasCompType

`func (o *ResCompAccountingType) HasCompType() bool`

HasCompType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


