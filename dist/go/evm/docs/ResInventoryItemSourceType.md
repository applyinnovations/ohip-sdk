# ResInventoryItemSourceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RatePlanCode** | Pointer to **string** | Rate Plan Code, If populated specifies that the item is setupCode due to a Rate Plan. | [optional] 
**PackageCode** | Pointer to **string** | Package Code, If populated specifies that the item is setupCode due to a Package. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**WelcomeOffer** | Pointer to **bool** | If true, it implies that the item has been attached to the reservation as part of a Welcome Offer | [optional] 
**PackageInternalID** | Pointer to **float32** | Source Reservation Package Opera Internal Unique Id. This is the unique Id used for the reservation package associated with this item. | [optional] 

## Methods

### NewResInventoryItemSourceType

`func NewResInventoryItemSourceType() *ResInventoryItemSourceType`

NewResInventoryItemSourceType instantiates a new ResInventoryItemSourceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResInventoryItemSourceTypeWithDefaults

`func NewResInventoryItemSourceTypeWithDefaults() *ResInventoryItemSourceType`

NewResInventoryItemSourceTypeWithDefaults instantiates a new ResInventoryItemSourceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRatePlanCode

`func (o *ResInventoryItemSourceType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *ResInventoryItemSourceType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *ResInventoryItemSourceType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *ResInventoryItemSourceType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetPackageCode

`func (o *ResInventoryItemSourceType) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *ResInventoryItemSourceType) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *ResInventoryItemSourceType) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *ResInventoryItemSourceType) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetBlockId

`func (o *ResInventoryItemSourceType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *ResInventoryItemSourceType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *ResInventoryItemSourceType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *ResInventoryItemSourceType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetWelcomeOffer

`func (o *ResInventoryItemSourceType) GetWelcomeOffer() bool`

GetWelcomeOffer returns the WelcomeOffer field if non-nil, zero value otherwise.

### GetWelcomeOfferOk

`func (o *ResInventoryItemSourceType) GetWelcomeOfferOk() (*bool, bool)`

GetWelcomeOfferOk returns a tuple with the WelcomeOffer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeOffer

`func (o *ResInventoryItemSourceType) SetWelcomeOffer(v bool)`

SetWelcomeOffer sets WelcomeOffer field to given value.

### HasWelcomeOffer

`func (o *ResInventoryItemSourceType) HasWelcomeOffer() bool`

HasWelcomeOffer returns a boolean if a field has been set.

### GetPackageInternalID

`func (o *ResInventoryItemSourceType) GetPackageInternalID() float32`

GetPackageInternalID returns the PackageInternalID field if non-nil, zero value otherwise.

### GetPackageInternalIDOk

`func (o *ResInventoryItemSourceType) GetPackageInternalIDOk() (*float32, bool)`

GetPackageInternalIDOk returns a tuple with the PackageInternalID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageInternalID

`func (o *ResInventoryItemSourceType) SetPackageInternalID(v float32)`

SetPackageInternalID sets PackageInternalID field to given value.

### HasPackageInternalID

`func (o *ResInventoryItemSourceType) HasPackageInternalID() bool`

HasPackageInternalID returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


