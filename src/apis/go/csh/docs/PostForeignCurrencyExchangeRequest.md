# PostForeignCurrencyExchangeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForeignCurrencyExchangeList** | Pointer to [**[]PostForeignCurrencyExchangeType**](PostForeignCurrencyExchangeType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostForeignCurrencyExchangeRequest

`func NewPostForeignCurrencyExchangeRequest() *PostForeignCurrencyExchangeRequest`

NewPostForeignCurrencyExchangeRequest instantiates a new PostForeignCurrencyExchangeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostForeignCurrencyExchangeRequestWithDefaults

`func NewPostForeignCurrencyExchangeRequestWithDefaults() *PostForeignCurrencyExchangeRequest`

NewPostForeignCurrencyExchangeRequestWithDefaults instantiates a new PostForeignCurrencyExchangeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForeignCurrencyExchangeList

`func (o *PostForeignCurrencyExchangeRequest) GetForeignCurrencyExchangeList() []PostForeignCurrencyExchangeType`

GetForeignCurrencyExchangeList returns the ForeignCurrencyExchangeList field if non-nil, zero value otherwise.

### GetForeignCurrencyExchangeListOk

`func (o *PostForeignCurrencyExchangeRequest) GetForeignCurrencyExchangeListOk() (*[]PostForeignCurrencyExchangeType, bool)`

GetForeignCurrencyExchangeListOk returns a tuple with the ForeignCurrencyExchangeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForeignCurrencyExchangeList

`func (o *PostForeignCurrencyExchangeRequest) SetForeignCurrencyExchangeList(v []PostForeignCurrencyExchangeType)`

SetForeignCurrencyExchangeList sets ForeignCurrencyExchangeList field to given value.

### HasForeignCurrencyExchangeList

`func (o *PostForeignCurrencyExchangeRequest) HasForeignCurrencyExchangeList() bool`

HasForeignCurrencyExchangeList returns a boolean if a field has been set.

### GetLinks

`func (o *PostForeignCurrencyExchangeRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostForeignCurrencyExchangeRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostForeignCurrencyExchangeRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostForeignCurrencyExchangeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostForeignCurrencyExchangeRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostForeignCurrencyExchangeRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostForeignCurrencyExchangeRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostForeignCurrencyExchangeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


