# CateringMenuInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClassName** | Pointer to **string** | This type holds name of Menu Class Name. | [optional] 
**ConsumptionBased** | Pointer to **bool** | This type holds value of consumption, Menu items will be charged on a consumption basis. | [optional] 
**CourseCount** | Pointer to **int32** | Define the Courses populated into the Multi Choice Menu Configuration | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DietaryList** | Pointer to **[]string** |  | [optional] 
**EventDateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**EventTypes** | Pointer to **[]string** |  | [optional] 
**Inactive** | Pointer to **bool** | Selection will note this Menu is Inactive and unable to be added to a Catering Event. | [optional] 
**IncludedInMenu** | Pointer to **bool** | Return true, when all Menu Items added will be marked as Included and there will be a Global Price for this menu | [optional] 
**IncludedInPrice** | Pointer to **bool** | Return true means, menu item as Included in the Menu Price | [optional] 
**MenusSold** | Pointer to **int32** | The total number of menus sold for the day on which the event takes place. | [optional] 
**MultiChoice** | Pointer to **bool** | Indicator of this being a multi-choice menu | [optional] 
**Name** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**QuickInsertCode** | Pointer to **string** | This type holds quick insert value, v5 functionality as Article Number for the Menu. | [optional] 
**Restriction** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**SalesPrice** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**SellDateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**ServingSize** | Pointer to **string** | This type holds TableCapacity for the given Menu. | [optional] 
**ServingType** | Pointer to [**ServingType**](ServingType.md) |  | [optional] 
**Type** | Pointer to [**MenuTypeType**](MenuTypeType.md) |  | [optional] 
**WebBookable** | Pointer to **bool** | This type tells about whether menu is book through web or not. | [optional] 

## Methods

### NewCateringMenuInfoType

`func NewCateringMenuInfoType() *CateringMenuInfoType`

NewCateringMenuInfoType instantiates a new CateringMenuInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuInfoTypeWithDefaults

`func NewCateringMenuInfoTypeWithDefaults() *CateringMenuInfoType`

NewCateringMenuInfoTypeWithDefaults instantiates a new CateringMenuInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClassName

`func (o *CateringMenuInfoType) GetClassName() string`

GetClassName returns the ClassName field if non-nil, zero value otherwise.

### GetClassNameOk

`func (o *CateringMenuInfoType) GetClassNameOk() (*string, bool)`

GetClassNameOk returns a tuple with the ClassName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassName

`func (o *CateringMenuInfoType) SetClassName(v string)`

SetClassName sets ClassName field to given value.

### HasClassName

`func (o *CateringMenuInfoType) HasClassName() bool`

HasClassName returns a boolean if a field has been set.

### GetConsumptionBased

`func (o *CateringMenuInfoType) GetConsumptionBased() bool`

GetConsumptionBased returns the ConsumptionBased field if non-nil, zero value otherwise.

### GetConsumptionBasedOk

`func (o *CateringMenuInfoType) GetConsumptionBasedOk() (*bool, bool)`

GetConsumptionBasedOk returns a tuple with the ConsumptionBased field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumptionBased

`func (o *CateringMenuInfoType) SetConsumptionBased(v bool)`

SetConsumptionBased sets ConsumptionBased field to given value.

### HasConsumptionBased

`func (o *CateringMenuInfoType) HasConsumptionBased() bool`

HasConsumptionBased returns a boolean if a field has been set.

### GetCourseCount

`func (o *CateringMenuInfoType) GetCourseCount() int32`

GetCourseCount returns the CourseCount field if non-nil, zero value otherwise.

### GetCourseCountOk

`func (o *CateringMenuInfoType) GetCourseCountOk() (*int32, bool)`

GetCourseCountOk returns a tuple with the CourseCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCourseCount

`func (o *CateringMenuInfoType) SetCourseCount(v int32)`

SetCourseCount sets CourseCount field to given value.

### HasCourseCount

`func (o *CateringMenuInfoType) HasCourseCount() bool`

HasCourseCount returns a boolean if a field has been set.

### GetDescription

`func (o *CateringMenuInfoType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CateringMenuInfoType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CateringMenuInfoType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CateringMenuInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDietaryList

`func (o *CateringMenuInfoType) GetDietaryList() []string`

GetDietaryList returns the DietaryList field if non-nil, zero value otherwise.

### GetDietaryListOk

`func (o *CateringMenuInfoType) GetDietaryListOk() (*[]string, bool)`

GetDietaryListOk returns a tuple with the DietaryList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDietaryList

`func (o *CateringMenuInfoType) SetDietaryList(v []string)`

SetDietaryList sets DietaryList field to given value.

### HasDietaryList

`func (o *CateringMenuInfoType) HasDietaryList() bool`

HasDietaryList returns a boolean if a field has been set.

### GetEventDateRange

`func (o *CateringMenuInfoType) GetEventDateRange() DateRangeType`

GetEventDateRange returns the EventDateRange field if non-nil, zero value otherwise.

### GetEventDateRangeOk

`func (o *CateringMenuInfoType) GetEventDateRangeOk() (*DateRangeType, bool)`

GetEventDateRangeOk returns a tuple with the EventDateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDateRange

`func (o *CateringMenuInfoType) SetEventDateRange(v DateRangeType)`

SetEventDateRange sets EventDateRange field to given value.

### HasEventDateRange

`func (o *CateringMenuInfoType) HasEventDateRange() bool`

HasEventDateRange returns a boolean if a field has been set.

### GetEventTypes

`func (o *CateringMenuInfoType) GetEventTypes() []string`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *CateringMenuInfoType) GetEventTypesOk() (*[]string, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *CateringMenuInfoType) SetEventTypes(v []string)`

SetEventTypes sets EventTypes field to given value.

### HasEventTypes

`func (o *CateringMenuInfoType) HasEventTypes() bool`

HasEventTypes returns a boolean if a field has been set.

### GetInactive

`func (o *CateringMenuInfoType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *CateringMenuInfoType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *CateringMenuInfoType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *CateringMenuInfoType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetIncludedInMenu

`func (o *CateringMenuInfoType) GetIncludedInMenu() bool`

GetIncludedInMenu returns the IncludedInMenu field if non-nil, zero value otherwise.

### GetIncludedInMenuOk

`func (o *CateringMenuInfoType) GetIncludedInMenuOk() (*bool, bool)`

GetIncludedInMenuOk returns a tuple with the IncludedInMenu field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedInMenu

`func (o *CateringMenuInfoType) SetIncludedInMenu(v bool)`

SetIncludedInMenu sets IncludedInMenu field to given value.

### HasIncludedInMenu

`func (o *CateringMenuInfoType) HasIncludedInMenu() bool`

HasIncludedInMenu returns a boolean if a field has been set.

### GetIncludedInPrice

`func (o *CateringMenuInfoType) GetIncludedInPrice() bool`

GetIncludedInPrice returns the IncludedInPrice field if non-nil, zero value otherwise.

### GetIncludedInPriceOk

`func (o *CateringMenuInfoType) GetIncludedInPriceOk() (*bool, bool)`

GetIncludedInPriceOk returns a tuple with the IncludedInPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedInPrice

`func (o *CateringMenuInfoType) SetIncludedInPrice(v bool)`

SetIncludedInPrice sets IncludedInPrice field to given value.

### HasIncludedInPrice

`func (o *CateringMenuInfoType) HasIncludedInPrice() bool`

HasIncludedInPrice returns a boolean if a field has been set.

### GetMenusSold

`func (o *CateringMenuInfoType) GetMenusSold() int32`

GetMenusSold returns the MenusSold field if non-nil, zero value otherwise.

### GetMenusSoldOk

`func (o *CateringMenuInfoType) GetMenusSoldOk() (*int32, bool)`

GetMenusSoldOk returns a tuple with the MenusSold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenusSold

`func (o *CateringMenuInfoType) SetMenusSold(v int32)`

SetMenusSold sets MenusSold field to given value.

### HasMenusSold

`func (o *CateringMenuInfoType) HasMenusSold() bool`

HasMenusSold returns a boolean if a field has been set.

### GetMultiChoice

`func (o *CateringMenuInfoType) GetMultiChoice() bool`

GetMultiChoice returns the MultiChoice field if non-nil, zero value otherwise.

### GetMultiChoiceOk

`func (o *CateringMenuInfoType) GetMultiChoiceOk() (*bool, bool)`

GetMultiChoiceOk returns a tuple with the MultiChoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiChoice

`func (o *CateringMenuInfoType) SetMultiChoice(v bool)`

SetMultiChoice sets MultiChoice field to given value.

### HasMultiChoice

`func (o *CateringMenuInfoType) HasMultiChoice() bool`

HasMultiChoice returns a boolean if a field has been set.

### GetName

`func (o *CateringMenuInfoType) GetName() TranslationTextType2000`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CateringMenuInfoType) GetNameOk() (*TranslationTextType2000, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CateringMenuInfoType) SetName(v TranslationTextType2000)`

SetName sets Name field to given value.

### HasName

`func (o *CateringMenuInfoType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetQuickInsertCode

`func (o *CateringMenuInfoType) GetQuickInsertCode() string`

GetQuickInsertCode returns the QuickInsertCode field if non-nil, zero value otherwise.

### GetQuickInsertCodeOk

`func (o *CateringMenuInfoType) GetQuickInsertCodeOk() (*string, bool)`

GetQuickInsertCodeOk returns a tuple with the QuickInsertCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuickInsertCode

`func (o *CateringMenuInfoType) SetQuickInsertCode(v string)`

SetQuickInsertCode sets QuickInsertCode field to given value.

### HasQuickInsertCode

`func (o *CateringMenuInfoType) HasQuickInsertCode() bool`

HasQuickInsertCode returns a boolean if a field has been set.

### GetRestriction

`func (o *CateringMenuInfoType) GetRestriction() TranslationTextType2000`

GetRestriction returns the Restriction field if non-nil, zero value otherwise.

### GetRestrictionOk

`func (o *CateringMenuInfoType) GetRestrictionOk() (*TranslationTextType2000, bool)`

GetRestrictionOk returns a tuple with the Restriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestriction

`func (o *CateringMenuInfoType) SetRestriction(v TranslationTextType2000)`

SetRestriction sets Restriction field to given value.

### HasRestriction

`func (o *CateringMenuInfoType) HasRestriction() bool`

HasRestriction returns a boolean if a field has been set.

### GetSalesPrice

`func (o *CateringMenuInfoType) GetSalesPrice() CurrencyAmountType`

GetSalesPrice returns the SalesPrice field if non-nil, zero value otherwise.

### GetSalesPriceOk

`func (o *CateringMenuInfoType) GetSalesPriceOk() (*CurrencyAmountType, bool)`

GetSalesPriceOk returns a tuple with the SalesPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesPrice

`func (o *CateringMenuInfoType) SetSalesPrice(v CurrencyAmountType)`

SetSalesPrice sets SalesPrice field to given value.

### HasSalesPrice

`func (o *CateringMenuInfoType) HasSalesPrice() bool`

HasSalesPrice returns a boolean if a field has been set.

### GetSellDateRange

`func (o *CateringMenuInfoType) GetSellDateRange() DateRangeType`

GetSellDateRange returns the SellDateRange field if non-nil, zero value otherwise.

### GetSellDateRangeOk

`func (o *CateringMenuInfoType) GetSellDateRangeOk() (*DateRangeType, bool)`

GetSellDateRangeOk returns a tuple with the SellDateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellDateRange

`func (o *CateringMenuInfoType) SetSellDateRange(v DateRangeType)`

SetSellDateRange sets SellDateRange field to given value.

### HasSellDateRange

`func (o *CateringMenuInfoType) HasSellDateRange() bool`

HasSellDateRange returns a boolean if a field has been set.

### GetServingSize

`func (o *CateringMenuInfoType) GetServingSize() string`

GetServingSize returns the ServingSize field if non-nil, zero value otherwise.

### GetServingSizeOk

`func (o *CateringMenuInfoType) GetServingSizeOk() (*string, bool)`

GetServingSizeOk returns a tuple with the ServingSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServingSize

`func (o *CateringMenuInfoType) SetServingSize(v string)`

SetServingSize sets ServingSize field to given value.

### HasServingSize

`func (o *CateringMenuInfoType) HasServingSize() bool`

HasServingSize returns a boolean if a field has been set.

### GetServingType

`func (o *CateringMenuInfoType) GetServingType() ServingType`

GetServingType returns the ServingType field if non-nil, zero value otherwise.

### GetServingTypeOk

`func (o *CateringMenuInfoType) GetServingTypeOk() (*ServingType, bool)`

GetServingTypeOk returns a tuple with the ServingType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServingType

`func (o *CateringMenuInfoType) SetServingType(v ServingType)`

SetServingType sets ServingType field to given value.

### HasServingType

`func (o *CateringMenuInfoType) HasServingType() bool`

HasServingType returns a boolean if a field has been set.

### GetType

`func (o *CateringMenuInfoType) GetType() MenuTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CateringMenuInfoType) GetTypeOk() (*MenuTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CateringMenuInfoType) SetType(v MenuTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *CateringMenuInfoType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetWebBookable

`func (o *CateringMenuInfoType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *CateringMenuInfoType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *CateringMenuInfoType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *CateringMenuInfoType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


