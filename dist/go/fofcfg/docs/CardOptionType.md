# CardOptionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequireIssueNumber** | Pointer to **bool** | Indicates whether issue number is mandatory or not. | [optional] 
**RequireStartDate** | Pointer to **bool** | Indicates whether start date is mandatory or not. | [optional] 
**Either** | Pointer to **bool** | Indicates that either Issue Number or Start Date is sufficient. | [optional] 

## Methods

### NewCardOptionType

`func NewCardOptionType() *CardOptionType`

NewCardOptionType instantiates a new CardOptionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCardOptionTypeWithDefaults

`func NewCardOptionTypeWithDefaults() *CardOptionType`

NewCardOptionTypeWithDefaults instantiates a new CardOptionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequireIssueNumber

`func (o *CardOptionType) GetRequireIssueNumber() bool`

GetRequireIssueNumber returns the RequireIssueNumber field if non-nil, zero value otherwise.

### GetRequireIssueNumberOk

`func (o *CardOptionType) GetRequireIssueNumberOk() (*bool, bool)`

GetRequireIssueNumberOk returns a tuple with the RequireIssueNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireIssueNumber

`func (o *CardOptionType) SetRequireIssueNumber(v bool)`

SetRequireIssueNumber sets RequireIssueNumber field to given value.

### HasRequireIssueNumber

`func (o *CardOptionType) HasRequireIssueNumber() bool`

HasRequireIssueNumber returns a boolean if a field has been set.

### GetRequireStartDate

`func (o *CardOptionType) GetRequireStartDate() bool`

GetRequireStartDate returns the RequireStartDate field if non-nil, zero value otherwise.

### GetRequireStartDateOk

`func (o *CardOptionType) GetRequireStartDateOk() (*bool, bool)`

GetRequireStartDateOk returns a tuple with the RequireStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireStartDate

`func (o *CardOptionType) SetRequireStartDate(v bool)`

SetRequireStartDate sets RequireStartDate field to given value.

### HasRequireStartDate

`func (o *CardOptionType) HasRequireStartDate() bool`

HasRequireStartDate returns a boolean if a field has been set.

### GetEither

`func (o *CardOptionType) GetEither() bool`

GetEither returns the Either field if non-nil, zero value otherwise.

### GetEitherOk

`func (o *CardOptionType) GetEitherOk() (*bool, bool)`

GetEitherOk returns a tuple with the Either field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEither

`func (o *CardOptionType) SetEither(v bool)`

SetEither sets Either field to given value.

### HasEither

`func (o *CardOptionType) HasEither() bool`

HasEither returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


