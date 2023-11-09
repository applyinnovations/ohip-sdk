# PostDiscountReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DiscountReasons** | Pointer to [**DiscountReasonsType**](DiscountReasonsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostDiscountReasonsRequest

`func NewPostDiscountReasonsRequest() *PostDiscountReasonsRequest`

NewPostDiscountReasonsRequest instantiates a new PostDiscountReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostDiscountReasonsRequestWithDefaults

`func NewPostDiscountReasonsRequestWithDefaults() *PostDiscountReasonsRequest`

NewPostDiscountReasonsRequestWithDefaults instantiates a new PostDiscountReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDiscountReasons

`func (o *PostDiscountReasonsRequest) GetDiscountReasons() DiscountReasonsType`

GetDiscountReasons returns the DiscountReasons field if non-nil, zero value otherwise.

### GetDiscountReasonsOk

`func (o *PostDiscountReasonsRequest) GetDiscountReasonsOk() (*DiscountReasonsType, bool)`

GetDiscountReasonsOk returns a tuple with the DiscountReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountReasons

`func (o *PostDiscountReasonsRequest) SetDiscountReasons(v DiscountReasonsType)`

SetDiscountReasons sets DiscountReasons field to given value.

### HasDiscountReasons

`func (o *PostDiscountReasonsRequest) HasDiscountReasons() bool`

HasDiscountReasons returns a boolean if a field has been set.

### GetLinks

`func (o *PostDiscountReasonsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostDiscountReasonsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostDiscountReasonsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostDiscountReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostDiscountReasonsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostDiscountReasonsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostDiscountReasonsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostDiscountReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


