# PutTransactionGeneratesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TransactionGenerates** | Pointer to [**HotelTransactionGeneratesSetupType**](HotelTransactionGeneratesSetupType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutTransactionGeneratesRequest

`func NewPutTransactionGeneratesRequest() *PutTransactionGeneratesRequest`

NewPutTransactionGeneratesRequest instantiates a new PutTransactionGeneratesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTransactionGeneratesRequestWithDefaults

`func NewPutTransactionGeneratesRequestWithDefaults() *PutTransactionGeneratesRequest`

NewPutTransactionGeneratesRequestWithDefaults instantiates a new PutTransactionGeneratesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutTransactionGeneratesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTransactionGeneratesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTransactionGeneratesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTransactionGeneratesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactionGenerates

`func (o *PutTransactionGeneratesRequest) GetTransactionGenerates() HotelTransactionGeneratesSetupType`

GetTransactionGenerates returns the TransactionGenerates field if non-nil, zero value otherwise.

### GetTransactionGeneratesOk

`func (o *PutTransactionGeneratesRequest) GetTransactionGeneratesOk() (*HotelTransactionGeneratesSetupType, bool)`

GetTransactionGeneratesOk returns a tuple with the TransactionGenerates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGenerates

`func (o *PutTransactionGeneratesRequest) SetTransactionGenerates(v HotelTransactionGeneratesSetupType)`

SetTransactionGenerates sets TransactionGenerates field to given value.

### HasTransactionGenerates

`func (o *PutTransactionGeneratesRequest) HasTransactionGenerates() bool`

HasTransactionGenerates returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTransactionGeneratesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTransactionGeneratesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTransactionGeneratesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTransactionGeneratesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


