# PostTransactionGeneratesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionGenerates** | Pointer to [**HotelTransactionGeneratesSetupType**](HotelTransactionGeneratesSetupType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTransactionGeneratesRequest

`func NewPostTransactionGeneratesRequest() *PostTransactionGeneratesRequest`

NewPostTransactionGeneratesRequest instantiates a new PostTransactionGeneratesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTransactionGeneratesRequestWithDefaults

`func NewPostTransactionGeneratesRequestWithDefaults() *PostTransactionGeneratesRequest`

NewPostTransactionGeneratesRequestWithDefaults instantiates a new PostTransactionGeneratesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionGenerates

`func (o *PostTransactionGeneratesRequest) GetTransactionGenerates() HotelTransactionGeneratesSetupType`

GetTransactionGenerates returns the TransactionGenerates field if non-nil, zero value otherwise.

### GetTransactionGeneratesOk

`func (o *PostTransactionGeneratesRequest) GetTransactionGeneratesOk() (*HotelTransactionGeneratesSetupType, bool)`

GetTransactionGeneratesOk returns a tuple with the TransactionGenerates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGenerates

`func (o *PostTransactionGeneratesRequest) SetTransactionGenerates(v HotelTransactionGeneratesSetupType)`

SetTransactionGenerates sets TransactionGenerates field to given value.

### HasTransactionGenerates

`func (o *PostTransactionGeneratesRequest) HasTransactionGenerates() bool`

HasTransactionGenerates returns a boolean if a field has been set.

### GetLinks

`func (o *PostTransactionGeneratesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTransactionGeneratesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTransactionGeneratesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTransactionGeneratesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTransactionGeneratesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTransactionGeneratesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTransactionGeneratesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTransactionGeneratesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


