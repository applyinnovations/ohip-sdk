# PostBestAvailableRatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BestAvailableRates** | Pointer to [**BestAvailableRatesType**](BestAvailableRatesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostBestAvailableRatesRequest

`func NewPostBestAvailableRatesRequest() *PostBestAvailableRatesRequest`

NewPostBestAvailableRatesRequest instantiates a new PostBestAvailableRatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBestAvailableRatesRequestWithDefaults

`func NewPostBestAvailableRatesRequestWithDefaults() *PostBestAvailableRatesRequest`

NewPostBestAvailableRatesRequestWithDefaults instantiates a new PostBestAvailableRatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBestAvailableRates

`func (o *PostBestAvailableRatesRequest) GetBestAvailableRates() BestAvailableRatesType`

GetBestAvailableRates returns the BestAvailableRates field if non-nil, zero value otherwise.

### GetBestAvailableRatesOk

`func (o *PostBestAvailableRatesRequest) GetBestAvailableRatesOk() (*BestAvailableRatesType, bool)`

GetBestAvailableRatesOk returns a tuple with the BestAvailableRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBestAvailableRates

`func (o *PostBestAvailableRatesRequest) SetBestAvailableRates(v BestAvailableRatesType)`

SetBestAvailableRates sets BestAvailableRates field to given value.

### HasBestAvailableRates

`func (o *PostBestAvailableRatesRequest) HasBestAvailableRates() bool`

HasBestAvailableRates returns a boolean if a field has been set.

### GetLinks

`func (o *PostBestAvailableRatesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBestAvailableRatesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBestAvailableRatesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBestAvailableRatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBestAvailableRatesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBestAvailableRatesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBestAvailableRatesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBestAvailableRatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


