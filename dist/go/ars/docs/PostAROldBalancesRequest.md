# PostAROldBalancesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**OldBalances** | Pointer to [**[]AROldBalancePostingType**](AROldBalancePostingType.md) | Collections of Old Balance Postings | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostAROldBalancesRequest

`func NewPostAROldBalancesRequest() *PostAROldBalancesRequest`

NewPostAROldBalancesRequest instantiates a new PostAROldBalancesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAROldBalancesRequestWithDefaults

`func NewPostAROldBalancesRequestWithDefaults() *PostAROldBalancesRequest`

NewPostAROldBalancesRequestWithDefaults instantiates a new PostAROldBalancesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostAROldBalancesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAROldBalancesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAROldBalancesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAROldBalancesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOldBalances

`func (o *PostAROldBalancesRequest) GetOldBalances() []AROldBalancePostingType`

GetOldBalances returns the OldBalances field if non-nil, zero value otherwise.

### GetOldBalancesOk

`func (o *PostAROldBalancesRequest) GetOldBalancesOk() (*[]AROldBalancePostingType, bool)`

GetOldBalancesOk returns a tuple with the OldBalances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldBalances

`func (o *PostAROldBalancesRequest) SetOldBalances(v []AROldBalancePostingType)`

SetOldBalances sets OldBalances field to given value.

### HasOldBalances

`func (o *PostAROldBalancesRequest) HasOldBalances() bool`

HasOldBalances returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAROldBalancesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAROldBalancesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAROldBalancesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAROldBalancesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


