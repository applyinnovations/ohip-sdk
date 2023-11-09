# SetTransactionCodeAccessRolesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TransactionAccessRoles** | Pointer to [**TrxCodeAccessRolesType**](TrxCodeAccessRolesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewSetTransactionCodeAccessRolesRequest

`func NewSetTransactionCodeAccessRolesRequest() *SetTransactionCodeAccessRolesRequest`

NewSetTransactionCodeAccessRolesRequest instantiates a new SetTransactionCodeAccessRolesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetTransactionCodeAccessRolesRequestWithDefaults

`func NewSetTransactionCodeAccessRolesRequestWithDefaults() *SetTransactionCodeAccessRolesRequest`

NewSetTransactionCodeAccessRolesRequestWithDefaults instantiates a new SetTransactionCodeAccessRolesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *SetTransactionCodeAccessRolesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetTransactionCodeAccessRolesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetTransactionCodeAccessRolesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetTransactionCodeAccessRolesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactionAccessRoles

`func (o *SetTransactionCodeAccessRolesRequest) GetTransactionAccessRoles() TrxCodeAccessRolesType`

GetTransactionAccessRoles returns the TransactionAccessRoles field if non-nil, zero value otherwise.

### GetTransactionAccessRolesOk

`func (o *SetTransactionCodeAccessRolesRequest) GetTransactionAccessRolesOk() (*TrxCodeAccessRolesType, bool)`

GetTransactionAccessRolesOk returns a tuple with the TransactionAccessRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionAccessRoles

`func (o *SetTransactionCodeAccessRolesRequest) SetTransactionAccessRoles(v TrxCodeAccessRolesType)`

SetTransactionAccessRoles sets TransactionAccessRoles field to given value.

### HasTransactionAccessRoles

`func (o *SetTransactionCodeAccessRolesRequest) HasTransactionAccessRoles() bool`

HasTransactionAccessRoles returns a boolean if a field has been set.

### GetWarnings

`func (o *SetTransactionCodeAccessRolesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetTransactionCodeAccessRolesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetTransactionCodeAccessRolesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetTransactionCodeAccessRolesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


