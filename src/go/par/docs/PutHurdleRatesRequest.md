# PutHurdleRatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HurdleRates** | Pointer to [**HurdleRatesEditType**](HurdleRatesEditType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutHurdleRatesRequest

`func NewPutHurdleRatesRequest() *PutHurdleRatesRequest`

NewPutHurdleRatesRequest instantiates a new PutHurdleRatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutHurdleRatesRequestWithDefaults

`func NewPutHurdleRatesRequestWithDefaults() *PutHurdleRatesRequest`

NewPutHurdleRatesRequestWithDefaults instantiates a new PutHurdleRatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHurdleRates

`func (o *PutHurdleRatesRequest) GetHurdleRates() HurdleRatesEditType`

GetHurdleRates returns the HurdleRates field if non-nil, zero value otherwise.

### GetHurdleRatesOk

`func (o *PutHurdleRatesRequest) GetHurdleRatesOk() (*HurdleRatesEditType, bool)`

GetHurdleRatesOk returns a tuple with the HurdleRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHurdleRates

`func (o *PutHurdleRatesRequest) SetHurdleRates(v HurdleRatesEditType)`

SetHurdleRates sets HurdleRates field to given value.

### HasHurdleRates

`func (o *PutHurdleRatesRequest) HasHurdleRates() bool`

HasHurdleRates returns a boolean if a field has been set.

### GetLinks

`func (o *PutHurdleRatesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutHurdleRatesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutHurdleRatesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutHurdleRatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutHurdleRatesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutHurdleRatesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutHurdleRatesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutHurdleRatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


