# PostMarketCodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MarketCode** | Pointer to [**MarketCodeType**](MarketCodeType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostMarketCodeRequest

`func NewPostMarketCodeRequest() *PostMarketCodeRequest`

NewPostMarketCodeRequest instantiates a new PostMarketCodeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMarketCodeRequestWithDefaults

`func NewPostMarketCodeRequestWithDefaults() *PostMarketCodeRequest`

NewPostMarketCodeRequestWithDefaults instantiates a new PostMarketCodeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostMarketCodeRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMarketCodeRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMarketCodeRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMarketCodeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMarketCode

`func (o *PostMarketCodeRequest) GetMarketCode() MarketCodeType`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *PostMarketCodeRequest) GetMarketCodeOk() (*MarketCodeType, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *PostMarketCodeRequest) SetMarketCode(v MarketCodeType)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *PostMarketCodeRequest) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMarketCodeRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMarketCodeRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMarketCodeRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMarketCodeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


