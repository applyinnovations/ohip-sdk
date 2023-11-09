# PostDeliveryMethodsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeliveryMethods** | Pointer to [**ConfiguredExternalDeliveryMethodsType**](ConfiguredExternalDeliveryMethodsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostDeliveryMethodsRequest

`func NewPostDeliveryMethodsRequest() *PostDeliveryMethodsRequest`

NewPostDeliveryMethodsRequest instantiates a new PostDeliveryMethodsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostDeliveryMethodsRequestWithDefaults

`func NewPostDeliveryMethodsRequestWithDefaults() *PostDeliveryMethodsRequest`

NewPostDeliveryMethodsRequestWithDefaults instantiates a new PostDeliveryMethodsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeliveryMethods

`func (o *PostDeliveryMethodsRequest) GetDeliveryMethods() ConfiguredExternalDeliveryMethodsType`

GetDeliveryMethods returns the DeliveryMethods field if non-nil, zero value otherwise.

### GetDeliveryMethodsOk

`func (o *PostDeliveryMethodsRequest) GetDeliveryMethodsOk() (*ConfiguredExternalDeliveryMethodsType, bool)`

GetDeliveryMethodsOk returns a tuple with the DeliveryMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryMethods

`func (o *PostDeliveryMethodsRequest) SetDeliveryMethods(v ConfiguredExternalDeliveryMethodsType)`

SetDeliveryMethods sets DeliveryMethods field to given value.

### HasDeliveryMethods

`func (o *PostDeliveryMethodsRequest) HasDeliveryMethods() bool`

HasDeliveryMethods returns a boolean if a field has been set.

### GetLinks

`func (o *PostDeliveryMethodsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostDeliveryMethodsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostDeliveryMethodsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostDeliveryMethodsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostDeliveryMethodsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostDeliveryMethodsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostDeliveryMethodsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostDeliveryMethodsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


