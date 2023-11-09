# PostMembershipTransactionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MembershipTransactionDetails** | Pointer to [**MembershipTransactionType**](MembershipTransactionType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostMembershipTransactionRequest

`func NewPostMembershipTransactionRequest() *PostMembershipTransactionRequest`

NewPostMembershipTransactionRequest instantiates a new PostMembershipTransactionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipTransactionRequestWithDefaults

`func NewPostMembershipTransactionRequestWithDefaults() *PostMembershipTransactionRequest`

NewPostMembershipTransactionRequestWithDefaults instantiates a new PostMembershipTransactionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostMembershipTransactionRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipTransactionRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipTransactionRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipTransactionRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipTransactionDetails

`func (o *PostMembershipTransactionRequest) GetMembershipTransactionDetails() MembershipTransactionType`

GetMembershipTransactionDetails returns the MembershipTransactionDetails field if non-nil, zero value otherwise.

### GetMembershipTransactionDetailsOk

`func (o *PostMembershipTransactionRequest) GetMembershipTransactionDetailsOk() (*MembershipTransactionType, bool)`

GetMembershipTransactionDetailsOk returns a tuple with the MembershipTransactionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTransactionDetails

`func (o *PostMembershipTransactionRequest) SetMembershipTransactionDetails(v MembershipTransactionType)`

SetMembershipTransactionDetails sets MembershipTransactionDetails field to given value.

### HasMembershipTransactionDetails

`func (o *PostMembershipTransactionRequest) HasMembershipTransactionDetails() bool`

HasMembershipTransactionDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipTransactionRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipTransactionRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipTransactionRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipTransactionRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


