# ProfileAccounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Accounts** | Pointer to [**ARAccountsType**](ARAccountsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewProfileAccounts

`func NewProfileAccounts() *ProfileAccounts`

NewProfileAccounts instantiates a new ProfileAccounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileAccountsWithDefaults

`func NewProfileAccountsWithDefaults() *ProfileAccounts`

NewProfileAccountsWithDefaults instantiates a new ProfileAccounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccounts

`func (o *ProfileAccounts) GetAccounts() ARAccountsType`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *ProfileAccounts) GetAccountsOk() (*ARAccountsType, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *ProfileAccounts) SetAccounts(v ARAccountsType)`

SetAccounts sets Accounts field to given value.

### HasAccounts

`func (o *ProfileAccounts) HasAccounts() bool`

HasAccounts returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileAccounts) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileAccounts) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileAccounts) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileAccounts) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileAccounts) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileAccounts) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileAccounts) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileAccounts) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


